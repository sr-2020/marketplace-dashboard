import { BaseNamedEntity, LifeStyle } from "../types";

export interface Organisation extends BaseNamedEntity {
  owner?: number;
}

//its immutable entity
export interface Corporation extends Organisation {
  logoUrl: string;
}

export interface Shop extends Organisation {
  lifestyle: LifeStyle;
  balance: number;
  specialisations?: number[];
}
