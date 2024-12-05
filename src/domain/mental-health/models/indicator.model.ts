export interface IIndicatorModel {
  series: Series;
}

export interface Series {
  freq: string;
  indicador: string;
  lastUpdate: string;
  note: string;
  observations: Observations;
  source: string;
  topic: string;
  unit: string;
  unitMult: string;
}

export interface Observations {
  cobreGeo: string;
  timePeriod: string;
}
