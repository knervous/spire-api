import axios from "axios";
import { MeApi } from "./api/me-api";
import { OcculusClient } from "./eqemu-admin-client-occulus";

const TOKEN_KEY = "spire-web-access-token-" + location.host;

export class UserContext {
  private static user: any = {};
  private static loaded: boolean;
  private static permissions: any = {};
  private static _is_admin: boolean = false;

  static isAdmin() {
    return this._is_admin;
  }
  static async loginSpire(username: string, password: string) {
    try {
      const r = await axios.post("/auth/login", {
        username,
        password,
      });
      if (r.data && r.status === 200) {
        if (r.data && r.data.data && r.data.data.token) {
          UserContext.storeAccessToken(r.data.data.token)
          SpireApi.reloadAxios()
          return true;
        }
      }
    } catch (err) {
      // error notify
      if (err.response && err.response.data && err.response.data.error) {
        return false
      }
    }
  }
  
  static setIsAdmin(value) {
    this._is_admin = value;
  }

  /**
   * Get user data
   */
  static async getUser() {
    if (this.loaded) {
      return this.user;
    }

    try {
      // @ts-ignore
      const result = await new MeApi({
        accessToken: undefined,
        apiKey: undefined,
        basePath: SpireApi.v1Path,
        // @ts-ignore
        formDataCtor: undefined,
        password: "",
        username: "",
        isJsonMime(mime: string): boolean {
          return false;
        },
        baseOptions: SpireApi.getAxiosConfig(),
      }).me();

      // @ts-ignore
      if (result.status === 200 && !result.data.error) {
        // @ts-ignore
        this.user = result.data;
        this.loaded = true;

        if (this.user.is_admin) {
          this.setIsAdmin(true);
        }

        return this.user;
      }
    } catch (e) {
      // squash
    }

    return null;
  }

  /**
   * Reset user context
   */
  static reset() {
    this.user = {};
    this.loaded = false;
    this.permissions = {};
    this._is_admin = false;
  }

  /**
   * @param accessToken
   */
  static storeAccessToken(accessToken: string) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem(TOKEN_KEY, accessToken);
      OcculusClient.storeAccessToken(accessToken);
    }
  }

  /**
   * Get access token
   */
  static getAccessToken() {
    if (typeof Storage !== "undefined") {
      const accessToken = localStorage.getItem(TOKEN_KEY) as string;

      return typeof accessToken === "undefined" || accessToken === null
        ? ""
        : accessToken.toString().trim();
    }

    return "";
  }

  static deleteAccessToken() {
    if (typeof Storage !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
      // remove legacy occulus token as well
      localStorage.removeItem("access_token");
    }
  }

  static getAccessTokenUserInfo() {
    let accessToken = this.getAccessToken();
    if (accessToken === "" || !accessToken.includes(".")) {
      return {};
    }

    const decodedToken = Buffer.from(
      accessToken.split(".")[1].trim(),
      "base64"
    ).toString();

    return JSON.parse(decodedToken);
  }
}



export class SpireApi {
  public static remoteUrl = '';

  static getAxiosConfig() {
    let spireAxiosConfig = <any>{

    }

    if (UserContext.getAccessToken() !== "") {
      spireAxiosConfig.headers = {'Authorization': 'Bearer ' + UserContext.getAccessToken(), 'x-remote-api': SpireApi.remoteUrl }
    }
    return spireAxiosConfig
  }

  static get v1Path() {
   return "/api/v1"
  }

  static getAccessTokenQueryString() {
    const token = this.getAccessToken()
    return token !== '' ? {'jwt': token} : {}
  }

  private static getAccessToken() {
    return UserContext.getAccessToken()
  }

  static cfg() {
    return [
      this.getOpenApiConfig(),
      this.v1Path,
      spireAxios
    ]
  }

  private static getOpenApiConfig() {
    let openApiConfig      = <any>{baseOptions: SpireApi.getAxiosConfig()}
    openApiConfig.basePath = this.v1Path

    return openApiConfig
  }

  static newAxiosWithConfig() {
    // @ts-ignore
    let client = axios.create(this.getAxiosConfig())

    client.interceptors.request.use(x => {
      // @ts-ignore
      x.meta                  = x.meta || {}
      // @ts-ignore
      x.meta.requestStartedAt = Date.now()

      x.headers['x-remote-api'] = SpireApi.remoteUrl;

      return x
    })

    axios.interceptors.request.use(x => {
      x.headers['x-remote-api'] = SpireApi.remoteUrl;
      return x
    });

    client.interceptors.response.use(response => {
      return response;
    }, error => {

      // check if jwt signature invalid
      // { "error": "Code=401, message=invalid or expired jwt, internal=signature is invalid" }
      if (error.response.data && error.response.data.error) {
        if (error.response.data.error.includes("invalid or expired jwt")) {
          UserContext.deleteAccessToken()
        }
      }

      console.log("401 error", error)
      if (error.response.status === 401) {
        console.log("401 error", error.response)
      }

      return Promise.reject(error);
    });

    return client
  }

  static v1() {
    return spireAxios
  }

  static reloadAxios() {
    spireAxios = SpireApi.newAxiosWithConfig()
  }
}

// singleton - we don't want to create a new instance every single time
// helpers are invoked
let spireAxios = SpireApi.newAxiosWithConfig()
