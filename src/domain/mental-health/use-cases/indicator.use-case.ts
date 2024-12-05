import { Observable } from "rxjs";
import { MentalHealthRepository } from "../repositories/mental-health.repository";
import { IIndicatorModel } from "../models";

export class IndicatorUseCase {
  constructor(
    private readonly mentalHealthRepository: MentalHealthRepository
  ) {}

  execute(): Observable<IIndicatorModel> {
    return this.mentalHealthRepository.getMentalHealthIndicator();
  }
}
