import { User } from '@/store/User/types';
import { ResponseModel } from '@/utils/httpAdapter'

export class UserDTO {
  rawData: User | undefined

  get id(): number {
    return this._id
  }

  get personName(): string {
    return this._personName
  }

  get currentBalance(): number | undefined {
    return this._currentBalance
  }

  _id = 0
  _personName = ''
  _currentBalance = 0

  constructor(resp: ResponseModel<User> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: User | undefined) {
    this._id = data?.id || 0
    this._personName = data?.name || ''

  }

  public reset() {
    this.setFields(this.rawData)
  }

}
