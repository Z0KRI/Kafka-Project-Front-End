import {
  IIndicatorModel,
  ISuicidesRegisteredModel,
} from "@/domain/mental-health/models";
import { IIndicator, ISuicidesRegistered } from "@/infrastructure/entities";

export class MentalHealthMapper {
  static IndicatorToMap(entity: IIndicator): IIndicatorModel {
    const { series } = entity;
    return {
      series: {
        ...series,
        lastUpdate: series.lastupdate,
        unitMult: series.unit_mult,
        observations: {
          cobreGeo: series.observations.cobre_geo,
          timePeriod: series.observations.time_period,
        },
      },
    };
  }

  static SuicidesRegistered(
    entity: ISuicidesRegistered
  ): ISuicidesRegisteredModel {
    return {
      ...entity,
      registeredDeaths: entity.registered_deaths,
    };
  }
}
