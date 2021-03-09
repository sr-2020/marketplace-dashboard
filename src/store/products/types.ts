import { BaseNamedEntity, LifeStyle } from "../types";
import { Corporation } from "../organisations/types";
//its immutable entity
export interface ProductType extends BaseNamedEntity {
  alias: string;
  discountType: 1 | 2;
}

export interface Specialisation extends ProductType {
  specialisationName: string;
  specialisationId: number;
}

export interface Nomenklatura extends Specialisation {
  nomenklaturaId: number;
  nomenklaturaName: string;
  code: string;
  lifestyleId: number;
  basePrice: number;
  baseCount: number;
  description: string;
  pictureUrl: string;
  secret: string;
}

export interface Sku extends Nomenklatura {
  skuId: number;
  skuName: string;
  count: number;
  corporationId: number;
  enabled: boolean;
}
