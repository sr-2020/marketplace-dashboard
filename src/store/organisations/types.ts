import { BaseNamedEntity } from '../types'
import { UserState } from '../user/types'

export interface Corporation extends BaseNamedEntity {
  logoUrl: string
  ownerId: number
  owner?: UserState
  //in progress
}

export interface Shop extends BaseNamedEntity {
  //in progress

}
