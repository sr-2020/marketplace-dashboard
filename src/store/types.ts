import { ThemeSwitcher } from '@/utils/themeSwitcher'
import AlertService from "@/utils/alertService";

export interface RootState {
  navbarState: boolean
  theme: ThemeSwitcher
  alertService: AlertService
}

export interface BaseEntity {
  id: number
}

export interface BaseNamedEntity extends BaseEntity {
  name: string
}

export interface LifeStyle {
  id: number
  name: string
}
