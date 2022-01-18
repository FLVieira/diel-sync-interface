import { Image } from './Image.model';

export interface Machine {
  id: string;
  context: string;
  tag: string;
  name: string;
  location: string;
  type: string;
  evaporatorsCount: string;
  shouldEvaporatorsWorkFullTime: string;
  controllerTime: string;
  minTemperature: string;
  maxTemperature: string;
  areaInSquareMeters: string;
  evaporatorPlateImages: Image[];
  condenserPlateImages: Image[];
  environmentCondenserImages: Image[];
  environmentEvaporatorImages: Image[];
  electricCommandImages: Image[];
  valveImages: Image[];
  compressorsImages: Image[];
}
