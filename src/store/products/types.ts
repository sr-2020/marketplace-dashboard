import { BaseNamedEntity, LifeStyles } from '../types'
import { Corporation } from '../organisations/types'
//its immutable entity
export interface ProductType extends BaseNamedEntity {
  alias: string
  discountType: 1 | 2
}

export interface Specialisation extends BaseNamedEntity {
  productType?: ProductType
  productTypeId: number
}

export interface Nomenklatura extends BaseNamedEntity {
  code: string
  lifestyle: LifeStyles
  basePrice: number
  baseCount: number
  description: string
  pictureUrl: string
  secret: string
  specialisation?: Specialisation
  specialisationId: number
}

export interface Sku extends BaseNamedEntity {
  count: number
  corporation?: Corporation
  corporationId: number
  nomenklatura?: Nomenklatura
  nomenklaturaId: number
  enabled: boolean
}
