import { entities } from "./entities.model";

export interface Aircraft {
  id: number;
  prog:string;
  design: boolean;
  development: boolean;
  entities : entities
}