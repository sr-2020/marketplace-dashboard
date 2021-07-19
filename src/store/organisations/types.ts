import { BaseNamedEntity, LifeStyle } from "../types";
import { Specialisation } from '@/store/products/types'

export interface Organisation extends BaseNamedEntity {
  owner?: number
  currentSkuSold: number
  lastSkuSold: number
}

//its immutable entity
export interface Corporation extends Organisation {
  corporationUrl: string
  lastKPI: number
  currentKPI: number
  specialisations: Specialisation[]
}

export interface Shop extends Organisation {
  lifestyle: LifeStyle
  comment: string | null
  specialisations?: number[]
  balance: number
  location: string | null
}
