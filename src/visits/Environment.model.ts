import { Image } from './Image.model';

export interface Environment {
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
  environmentImages: Image[];
}
