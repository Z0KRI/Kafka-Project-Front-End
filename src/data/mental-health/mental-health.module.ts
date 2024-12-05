import { HTTPClass } from "@/infrastructure/common/classes/http.class";
import { MentalHealthService } from "@/infrastructure/services";
import { MentalHealthImpRepository } from "./repositories/mental-health.imp-repository";
import {
  EntityViolentDeathsUseCase,
  IndicatorUseCase,
  SuicidesRegisteredUseCase,
} from "@/domain/mental-health/use-cases";

export function MentalHealthDataModule() {
  //? Crear una instancia de la clase HTTP que se usará para las solicitudes de red
  const http = new HTTPClass();

  const service = new MentalHealthService(http);

  const impRepo = new MentalHealthImpRepository(service);

  return {
    Indicator: () => new IndicatorUseCase(impRepo),
    SuicidesRegistered: () => new SuicidesRegisteredUseCase(impRepo),
    EntityViolentDeaths: () => new EntityViolentDeathsUseCase(impRepo),
  };
}
