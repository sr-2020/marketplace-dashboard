import { BaseNamedEntity } from "../types";

//its immutable entity
export interface ProductType extends BaseNamedEntity {
  alias: string;
  discountType: 1 | 2;
}

export interface Specialisation extends ProductType {
  productTypeId: number;
  productTypeName: string;
  specialisationName: string;
  specialisationId: number;
  instantConsume: boolean;
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
