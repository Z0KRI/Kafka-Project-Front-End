import {
  IEntityViolentDeathsModel,
  IIndicatorModel,
  ISuicidesRegisteredModel,
} from "@/domain/mental-health/models";
import { MentalHealthRepository } from "@/domain/mental-health/repositories/mental-health.repository";
import { MentalHealthService } from "@/infrastructure/services";
import { map, Observable } from "rxjs";
import { MentalHealthMapper } from "../mappers/mental-health.mapper";

export class MentalHealthImpRepository extends MentalHealthRepository {
  constructor(private readonly service: MentalHealthService) {
    super();
  }

  override getEntitiesViolentDeaths(): Observable<IEntityViolentDeathsModel> {
    return this.service.getEntitiesViolentDeaths();
  }

  override getMentalHealthIndicator(): Observable<IIndicatorModel> {
    return this.service
      .getMentalHealthIndicator()
      .pipe(map((resp) => MentalHealthMapper.IndicatorToMap(resp)));
  }

  override getSuicidesRegistered(): Observable<ISuicidesRegisteredModel> {
    return this.service
      .getSuicidesRegistered()
      .pipe(map((resp) => MentalHealthMapper.SuicidesRegistered(resp)));
  }
}
