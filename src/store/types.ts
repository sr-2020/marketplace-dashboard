import { ThemeSwitcher } from '@/utils/themeSwitcher'
import { Nomenklatura, ProductType, Sku, Specialisation } from "@/store/products/types";
import { User } from "@/store/user/types";
import { Corporation, Shop } from "@/store/organisations/types";

export interface RootState {
  navbarState: boolean
  theme: ThemeSwitcher
  session: Session | null
  users: User[]
  skus: Sku[]
  nomenklaturas: Nomenklatura[]
  producttypes: ProductType[]
  corporations: Corporation[]
  shops: Shop[]
  specialisations: Specialisation[]
  lifestyles: LifeStyle[]
}

export interface BaseEntity {
  id: number
}

export interface BaseNamedEntity extends BaseEntity {
  name: string
}

export interface LifeStyle {
  id?: number
  name?: string
}

export interface Session {
  personName: string            // Имя игрока
  deploy: string                // Используемая БД
  beatCharacters: CharacterBeat // Информация о последнем пересчете по Персонажам
  beatItems: any                // Тест
  lifeStyle: LifestyleStatistic // Порог уровня жизни

  cycle: {                    // Цикл пересчета
    token: string            // Не выводить
    isActive: boolean        // Активность цикла
    number: number           // Номер цикла
  }
}

export interface CharacterBeat {
  count: number           // Количество персонажей которые были пересчитаны
  finishTime: string      // Отладочная - не выводить
  forecastMax: number     // Прогноз максимального значения денег на счету
  forecastMin: number     // Прогноз минимального значения денег на счету
  forecastSumAll: number  // Прогноз всех денежных средств
  insolvent: number       // Количество банкротов
  irridium: number        // Количество игроков с лайфстайлом Ирридиум
  max: number             // Максимальное значение денег на счету
  min: number             // Минимальное значение денег на счету
  number: number          // Номер пересчета
  startTime: string       // Отладочная - не выводить
  sumAll: number          // Всего денежных денежных средств на кошельках
  sumKarma: number        // Сумма начислений за последний пересчет
  sumRents: number        // Сумма списаний за последний пересчет
  sumDividends: number    // Сумма начислений по абилкам
}

export interface LifestyleStatistic {
  bronze: number
  forecastBronze: number
  silver: number
  forecastSilver: number
  gold: number
  forecastGold: number
  platinum: number
  forecastPlatinum: number
}
