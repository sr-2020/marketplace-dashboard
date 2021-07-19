import { ResponseModel } from '@/utils/httpAdapter'
import { Corporation } from '@/store/organisations/types'

export class CorporationDTO {
  get currentSkuSold(): number {
    return this._currentSkuSold
  }
  get lastSkuSold(): number {
    return this._lastSkuSold
  }

  get ownerId(): number {
    return this._ownerId
  }

  get currentKPI(): number {
    return this._currentKPI
  }

  get lastKPI(): number {
    return this._lastKPI
  }

  rawData: Corporation | undefined

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get specialisations(): number[] {
    return this._specialisations
  }

  _id = 0
  _name = ''
  _lastKPI = 0
  _currentKPI = 0
  _lastSkuSold = 0
  _currentSkuSold = 0
  _specialisations: number[] = []
  _ownerId = 0

  constructor(resp: ResponseModel<Corporation> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Corporation | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''
    this._lastKPI = data?.lastKPI || 0
    this._currentKPI = data?.currentKPI || 0
    this._currentSkuSold = data?.currentSkuSold || 0
    this._lastSkuSold = data?.lastSkuSold || 0
    this._ownerId = data?.owner || 0
  }
}
