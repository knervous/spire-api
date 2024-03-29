import { ContentFlagApi } from "../api/content-flag-api";
import { SpireApi } from "../spire-api";

export class ContentFlags {
  public static flags = <any>[];

  public static async get() {
    if (this.flags && this.flags.length > 0) {
      return this.flags;
    }

    const r = await new ContentFlagApi(...SpireApi.cfg()).listContentFlags();
    if (r.status === 200) {
      this.flags = r.data;
      return r.data;
    }

    return [];
  }
}
