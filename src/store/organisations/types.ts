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
  comment: string | null;
  balance: number;
  location: string | null;
  specialisations?: number[];
}
