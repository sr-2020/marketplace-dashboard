import { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'
import { UserState } from '@/store/user/types'

export class ShopDTO {
  get balance(): number | undefined {
    return this._balance
  }

  get lifestyle(): string | undefined {
    return this._lifestyle
  }

  get specialisations(): number[] | undefined {
    return this._specialisations
  }

  get owner(): UserState | null{
    return this._owner
  }

  get name(): string {
    return this._name
  }

  get id(): number {
    return this._id
  }

  _id: number
  _name: string
  _owner: UserState | null
  _specialisations?: number[]
  _lifestyle: string
  _balance: number

  constructor({ data }: ResponseModel<Shop>) {
    this._id = data.id || 0
    this._name = data.name || ''
    this._owner = data.owner || null
    this._balance = data.balance || 0
    this._lifestyle = data.lifestyle || ''
    this._specialisations = data.specialisations || []
  }

  // public getChangeDto() {
  //
  // }
  //
  // public getAddDto() {
  //   return {
  //     name: this.name
  //   }
  // }
}
