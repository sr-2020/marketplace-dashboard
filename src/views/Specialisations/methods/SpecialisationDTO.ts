import { ResponseModel } from '@/utils/httpAdapter'
import { Specialisation } from '@/store/products/types'

export class SpecialisationDTO {
  rawData: Specialisation | undefined

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get productTypeId(): number | undefined {
    return this._productTypeId
  }

  get productTypeName(): string | undefined {
    return this._productTypeName
  }

  get discountType(): number | undefined {
    return this._discountType
  }

  get alias(): string | undefined {
    return this._alias
  }

  _id = 0
  _name = ''
  _productTypeId: number | undefined
  _productTypeName: string | undefined
  _discountType: number | undefined
  _alias: string | undefined
  _instantConsume: boolean | undefined

  constructor(resp: ResponseModel<Specialisation> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Specialisation | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''
    this._productTypeId = data?.productTypeId
    this._productTypeName = data?.productTypeName
    this._discountType = data?.discountType
    this._alias = data?.alias
    this._instantConsume = data?.instantConsume
  }

  public reset() {
    this.setFields(this.rawData)
  }

  public getChangeDto() {
    return {
      specialisationId: this.id,
      productTypeId: this.productTypeId,
      name: this.name
    }
  }

  public getAddDto() {
    return {
      specialisationId: this.id,
      productTypeId: this.productTypeId,
      name: this.name
    }
  }
}
