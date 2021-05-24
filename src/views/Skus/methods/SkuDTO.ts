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

  get nomenklaturaId(): number {
    return this._nomenklaturaId
  }

  get corporationId(): number {
    return this._corporationId;
  }

  get count(): number {
    return this._count;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  _id = 0
  _name = ''
  _nomenklaturaId = 0
  _count = 0
  _corporationId = 0
  _enabled = false

  constructor(resp: ResponseModel<Sku> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Sku | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''
    this._count = data?.count || 0
    this._corporationId = data?.corporationId || 0
    this._nomenklaturaId = data?.nomenklaturaId || 0
    this._enabled = data?.enabled || false
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
      nomenklaturaId: this.nomenklaturaId,
      corporationId: this.corporationId,
      count: this.count,
      enabled: this.enabled
    }
  }
}
