import { BaseNamedEntity } from '../types';
import { User } from '../user/types';
//Это неизменяемая сущность
export interface Corporation extends BaseNamedEntity {
    logoUrl: string
    ownerId: number
    owner?: User
    //in progress
}

export interface Shop extends BaseNamedEntity {
    //in progress

}