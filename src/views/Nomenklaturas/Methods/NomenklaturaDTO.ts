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

  _id = 0
  _name = ''

  constructor(resp: ResponseModel<Nomenklatura> | undefined) {
    this.rawData = resp?.data
    this.setFields(this.rawData)
  }

  private setFields(data: Nomenklatura | undefined) {
    this._id = data?.id || 0
    this._name = data?.name || ''

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
