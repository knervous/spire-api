import axios from "axios";
import UserContext from "./UserContext";


export class SpireApi {
  public static remoteUrl = '';

  static getAxiosConfig() {
    let spireAxiosConfig = <any>{
      baseURL: SpireApi.v1Path
    }

    if (UserContext.getAccessToken() !== "") {
      spireAxiosConfig.headers = {'Authorization': 'Bearer ' + UserContext.getAccessToken() }
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
