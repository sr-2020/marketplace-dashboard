import { ResponseModel } from '@/utils/httpAdapter'
import { Shop } from '@/store/organisations/types'

export class ShopDTO {
  rawData: Shop | undefined

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get balance(): number | undefined {
    return this._balance
  }

  get location(): string | null {
    return this._location
  }

  get lifestyle(): number | null {
    return this._lifestyle
  }

  get specialisations(): number[] | undefined {
    return this._specialisations
  }

  get owner(): number | null {
    return this._owner
  }

  get comment(): string | null {
    return this._comment
  }

  _balance = 0
  _comment = ''
  _id = 0
  _lifestyle: number | null = null
  _location: string | null = null
  _name = ''
  _owner: number | null = null
  _specialisations?: number[] = []

  constructor(resp: ResponseModel<Shop> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Shop | undefined) {
    this._balance = data?.balance || 0
    this._comment = data?.comment || ''
    this._id = data?.id || 0
    this._lifestyle = data?.lifestyle?.id || null
    this._location = data?.location || null
    this._name = data?.name || ''
    this._owner = data?.owner || null
    this._specialisations = data?.specialisations || []
  }

  public reset() {
    this.setFields(this.rawData)
  }

  public getChangeDto() {
    return {
      shopId: this.id,
      ...this.getAddDto()
    }
  }

  public getAddDto() {
    return {
      balance: this.balance,
      comment: this.comment,
      lifestyle: this.lifestyle || null,
      location: this.location,
      name: this.name,
      owner: this.owner || null,
      specialisations: this.specialisations
    }
  }
}
