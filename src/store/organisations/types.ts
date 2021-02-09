import { BaseNamedEntity } from '../types';
import { User } from '../user/types';
//��� ������������ ��������
export interface Corporation extends BaseNamedEntity {
    logoUrl: string
    ownerId: number
    owner?: User
    //in progress
}

export interface Shop extends BaseNamedEntity {
    //in progress

}