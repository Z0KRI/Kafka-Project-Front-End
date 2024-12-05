import { ISuicidesRegisteredModel } from "@/domain/mental-health/models";
import { ISuicidesRegisteredTable } from "@/domain/mental-health/models/suicides-registered-table.model";

export class MentalHealthTableMapper {
  static toMap(model: ISuicidesRegisteredModel): ISuicidesRegisteredTable {
    return {
      periodo: model.period.toString(),
      "Defunciones registradas": model.registeredDeaths.toString(),
    };
  }
}
