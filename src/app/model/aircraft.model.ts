import { Entitie } from "./entitie.model";

export interface Aircraft {
  id: number;
  prog: string;
  design: boolean;
  development: boolean;
  entities: Entitie
}