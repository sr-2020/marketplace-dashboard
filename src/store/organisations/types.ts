import { BaseNamedEntity, LifeStyle } from "../types";

export interface Organisation extends BaseNamedEntity {
  owner?: number
  specialisations?: number[]
  "currentSkuSold": number
  "lastSkuSold": number
}

//its immutable entity
export interface Corporation extends Organisation {
  corporationUrl: string
  lastKPI: number
  currentKPI: number
}

export interface Shop extends Organisation {
  lifestyle: LifeStyle
  comment: string | null
  balance: number
  location: string | null
}
