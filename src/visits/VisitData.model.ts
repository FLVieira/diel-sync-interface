import { Environment } from './Environment.model';
import { Machine } from './Machine.model';

export interface VisitData {
  climatizationAndRefrigeration: {
    environments: Environment[];
    machines: Machine[];
  };
}
