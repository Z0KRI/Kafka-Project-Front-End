import { Observable } from "rxjs";
import { MentalHealthRepository } from "../repositories/mental-health.repository";
import { IEntityViolentDeathsModel } from "../models";

export class EntityViolentDeathsUseCase {
  constructor(
    private readonly mentalHealthRepository: MentalHealthRepository
  ) {}

  execute(): Observable<IEntityViolentDeathsModel[]> {
    return this.mentalHealthRepository.getEntitiesViolentDeaths();
  }
}
