import { Observable } from "rxjs";
import {
  IEntityViolentDeathsModel,
  IIndicatorModel,
  ISuicidesRegisteredModel,
} from "../models";

export abstract class MentalHealthRepository {
  abstract getMentalHealthIndicator(): Observable<IIndicatorModel>;

  abstract getSuicidesRegistered(): Observable<ISuicidesRegisteredModel>;

  abstract getEntitiesViolentDeaths(): Observable<IEntityViolentDeathsModel>;
}
