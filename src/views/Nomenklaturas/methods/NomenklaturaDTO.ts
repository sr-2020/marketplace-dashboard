import { ResponseModel } from '@/utils/httpAdapter'
import { Nomenklatura } from '@/store/products/types'

export class NomenklaturaDTO {
  rawData: Nomenklatura | undefined

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get pictureUrl(): string {
    return this._pictureUrl
  }

  get description(): string {
    return this._description
  }

  get baseCount(): number {
    return this._baseCount
  }

  get basePrice(): number {
    return this._basePrice
  }

  get lifestyleId(): number | null {
    return this._lifestyleId
  }

  get specialisationId(): number | null {
    return this._specialisationId
  }

  get code(): string {
    return this._code
  }

  _id = 0
  _name = ''
  _code = ''
  _specialisationId: number | null = 0
  _lifestyleId: number | null = 0
  _basePrice = 0
  _baseCount = 0
  _description = ''
  _pictureUrl = ''

  constructor(resp: ResponseModel<Nomenklatura> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Nomenklatura | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''
    this._code = data?.code || ''
    this._specialisationId = data?.specialisationId || null
    this._lifestyleId = data?.lifeStyleId || null
    this._basePrice = data?.basePrice || 0
    this._baseCount = data?.baseCount || 0
    this._description = data?.description || ''
    this._pictureUrl = data?.pictureUrl || ''
  }

  public reset() {
    this.setFields(this.rawData)
  }

  public getChangeDto() {
    return {
      id: this.id,
      ...this.getAddDto()
    }
  }

  public getAddDto() {
    return {
      name: this.name,
      code: this.code,
      specialisationId: this.specialisationId,
      lifestyle: this.lifestyleId,
      basePrice: this.basePrice,
      baseCount: this.baseCount,
      description: this.description,
      pictureUrl: this.pictureUrl
    }
  }
}
