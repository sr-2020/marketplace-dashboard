import { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'

export class ShopDTO  {
  rawData: Shop | undefined

  get balance(): number | undefined {
    return this._balance
  }

  get lifestyle(): number | null{
    return this._lifestyle
  }

  get specialisations(): number[] | undefined {
    return this._specialisations
  }

  get owner(): number | null{
    return this._owner
  }

  get name(): string {
    return this._name
  }

  get id(): number {
    return this._id
  }

  _id = 0
  _name = ''
  _owner: number | null = null
  _specialisations?: number[] = []
  _lifestyle: number | null = null
  _balance = 0

  constructor( resp: ResponseModel<Shop> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Shop | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''
    this._owner = data?.owner || null
    this._balance = data?.balance || 0
    this._lifestyle = data?.lifestyle?.id || null
    this._specialisations = data?.specialisations || []
  }

  public reset() {
    this.setFields(this.rawData)
  }

  public getChangeDto() {
    return {
      shopId: this.id,
      name: this.name,
      balance: this.balance,
      owner: this.owner || null,
      lifestyle: this.lifestyle || null,
      specialisations: this.specialisations
    }
  }

  public getAddDto() {
    return {
      name: this.name,
      balance: this.balance,
      owner: this.owner || null,
      lifestyle: this.lifestyle || null,
      specialisations: this.specialisations
    }
  }
}
