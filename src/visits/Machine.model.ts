import { Image } from './Image.model';
import { Option } from './Option.model';

export interface Machine {
  id: string;
  context: string;
  tag: string;
  type: string;
  model: string;
  brand: string;
  cycles: string;
  frigoCapacity: string;
  unit: string;
  ratedPower: string;
  tension: string;
  fluid: string;
  valve: string;
  associatedMachines: Option[];
  associatedEnvs: Option[];
  associatedEnvsLocalization: Option[];
  evaporatorPlateImages: Image[];
  condenserPlateImages: Image[];
  environmentCondenserImages: Image[];
  environmentEvaporatorImages: Image[];
  electricCommandImages: Image[];
  valveImages: Image[];
  compressorsImages: Image[];
}
