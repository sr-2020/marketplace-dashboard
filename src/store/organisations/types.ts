import { BaseNamedEntity } from '../types'
import { UserState } from '../user/types'

export interface Organisation extends BaseNamedEntity {
    owner?: UserState

}

//its immutable entity
export interface Corporation extends BaseNamedEntity {
    logoUrl: string
}

export interface Shop extends BaseNamedEntity {
    lifestyle: string
    balance: number
    specialisations?: number[]
}
