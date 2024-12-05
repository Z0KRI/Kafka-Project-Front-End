export interface IIndicator {
  series: Series;
}

export interface Series {
  freq: string;
  indicador: string;
  lastupdate: string;
  note: string;
  observations: Observations;
  source: string;
  topic: string;
  unit: string;
  unit_mult: string;
}

export interface Observations {
  cobre_geo: string;
  time_period: string;
}

export interface ISuicidesRegistered {
  id: number;
  period: number;
  registered_deaths: number;
}

export interface IEntityViolentDeaths {
  id: number;
  entity: string;
  percentage: number;
}
