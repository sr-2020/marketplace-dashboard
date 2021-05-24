import { ResponseModel } from '@/utils/httpAdapter'
import { Sku } from '@/store/products/types'

export class SkuDTO {
  rawData: Sku | undefined

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get nomenclatureId(): number {
    return this._nomenclatureId
  }

  get corporationId(): number {
    return this._corporationId;
  }
  get count(): number {
    return this._count;
  }

  _id = 0
  _name = ''
  _nomenclatureId = 0
  _count = 0
  _corporationId = 0

  constructor(resp: ResponseModel<Sku> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Sku | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''
    this._count = data?.count || 0
    this._corporationId = data?.corporationId || 0
    this._nomenclatureId = data?.nomenklaturaId || 0
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
      name: this.name
    }
  }
}
