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

  get nomenklaturaId(): number | null {
    return this._nomenklaturaId
  }

  get corporationId(): number | null {
    return this._corporationId;
  }

  get count(): number {
    return this._count;
  }

  get skuBaseCount(): number  | null {
    return this._skuBaseCount
  }

  get skuBasePrice(): number | null {
    return this._skuBasePrice
  }

  get enabled(): boolean {
    return this._enabled;
  }

  _id = 0
  _name = ''
  _nomenklaturaId: number | null = 0
  _count = 0
  _skuBasePrice: number | null = null
  _skuBaseCount: number | null = null
  _corporationId: number | null = 0
  _enabled = false

  constructor(resp: ResponseModel<Sku> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Sku | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''
    this._count = data?.count || 0
    this._skuBasePrice = data?.skuBasePrice || null
    this._skuBaseCount = data?.skuBaseCount || null
    this._corporationId = data?.corporationId || null
    this._nomenklaturaId = data?.nomenklaturaId || null
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
      corporation: this.corporationId,
      count: this.count,
      skuBasePrice: this.skuBasePrice,
      skuBaseCount: this.skuBaseCount,
      enabled: this.enabled
    }
  }
}
