import { GridEntryApi } from "../api/grid-entry-api";
import { SpireApi } from "../spire-api";
import { SpireQueryBuilder } from "../spire-query-builder";

export class Grid {
  public static async getById(zoneId: string) {
    const gridEntriesApi = new GridEntryApi(...SpireApi.cfg());
    const gridEntriesRequest = new SpireQueryBuilder()
      .where("zoneid", "=", zoneId)
      .orderBy(["gridid", "number"])
      .limit(100000)
      .get() as any;
    const r = await gridEntriesApi.listGridEntries(gridEntriesRequest);
    return r?.data;
  }
}
