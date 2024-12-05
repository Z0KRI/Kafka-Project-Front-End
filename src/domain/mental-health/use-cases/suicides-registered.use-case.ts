import { Observable } from "rxjs";
import { MentalHealthRepository } from "../repositories/mental-health.repository";
import { ISuicidesRegisteredModel } from "../models";

export class SuicidesRegisteredUseCase {
  constructor(
    private readonly mentalHealthRepository: MentalHealthRepository
  ) {}
  execute(): Observable<ISuicidesRegisteredModel> {
    return this.mentalHealthRepository.getSuicidesRegistered();
  }
}
