import { catchError, Observable } from "rxjs";
import { UtilClass } from "../common/classes/util.class";
import router from "@/common/router/main";
import {
  IEntityViolentDeaths,
  IIndicator,
  ISuicidesRegistered,
} from "../entities";
import { HTTPClass } from "../common/classes/http.class";

export class MentalHealthService extends UtilClass {
  private readonly url = `http://localhost:3000/api/beta/mental-health`;

  constructor(private http: HTTPClass) {
    super(router);
  }

  getMentalHealthIndicator(): Observable<IIndicator> {
    return this.http
      .get<IIndicator>(`${this.url}/violent-suicides/indicator`)
      .pipe(catchError(this.Errors));
  }

  getSuicidesRegistered(): Observable<ISuicidesRegistered[]> {
    return this.http
      .get<ISuicidesRegistered[]>(`${this.url}/suicides-registered`)
      .pipe(catchError(this.Errors));
  }
  getEntitiesViolentDeaths(): Observable<IEntityViolentDeaths[]> {
    return this.http
      .get<IEntityViolentDeaths[]>(`${this.url}/entities-violent-death`)
      .pipe(catchError(this.Errors));
  }
}
