import {  User } from '@/store/user/types';
import { ResponseModel } from '@/utils/httpAdapter';
import { Sin } from '@/store/user/types';

export class UserDTO {
  rawData: Sin | undefined

  get modelId(): number {
    return this._modelId
  }

  get personName(): string {
    return this._personName
  }

  get currentBalance(): number | undefined {
    return this._currentBalance
  }

  get sin(): string | undefined {
    return this._sin
  }

  get currentScoring(): number | undefined {
    return this._currentScoring
  }

  get lifeStyle(): string | undefined {
    return this._lifeStyle
  }

  get forecastLifeStyle(): string | undefined {
    return this._forecastLifeStyle
  }

  get metatype(): string | undefined {
    return this._metatype
  }

  get citizenship(): string | undefined {
    return this._citizenship
  }

  get viza(): string | undefined {
    return this._viza
  }

  get pledgee(): string | undefined {
    return this._pledgee
  }

  get insurance(): string | undefined {
    return this._insurance
  }

  get licenses(): string[] | undefined {
    return this._licenses
  }

  _modelId = 0
  _personName = ''
  _currentBalance = 0
  _sin = ''
  _currentScoring = 0
  _lifeStyle = ''
  _forecastLifeStyle = ''
  _metatype = ''
  _citizenship = ''
  _viza = ''
  _pledgee = ''
  _insurance = ''
  _licenses?: string[] = []

  constructor(resp: ResponseModel<User> | undefined) {
    this.rawData = resp?.data.sin
    this.setFields(this.rawData)
  }

  private setFields(data: Sin | undefined) {
    this._modelId = data?.modelId || 0
    this._personName = data?.personName || ''
    this._currentBalance = data?.currentBalance || 0
    this._sin = data?.sin || ''
    this._currentScoring = data?.currentScoring || 0
    this._lifeStyle = data?.lifeStyle || ''
    this._forecastLifeStyle = data?.forecastLifeStyle || ''
    this._metatype = data?.metatype || ''
    this._citizenship = data?.citizenship || ''
    this._viza = data?.viza || ''
    this._pledgee = data?.pledgee || ''
    this._insurance = data?.insurance || ''
    this._licenses = data?.licenses || []
  }

  public reset() {
    this.setFields(this.rawData)
  }

}
