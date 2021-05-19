import { ThemeSwitcher } from '@/utils/themeSwitcher'
import { Nomenklatura, Sku, Specialisation } from "@/store/products/types";
import { User } from "@/store/user/types";
import { Corporation, Shop } from "@/store/organisations/types";

export interface RootState {
  navbarState: boolean;
  theme: ThemeSwitcher;
  users: User[];
  skus: Sku[];
  nomenklaturas: Nomenklatura[];
  corporations: Corporation[];
  shops: Shop[];
  specialisations: Specialisation[];
  lifestyles: LifeStyle[];
}

export interface BaseEntity {
  id: number;
}

export interface BaseNamedEntity extends BaseEntity {
  name: string;
}

export interface LifeStyle {
  id?: number;
  name?: string;
}
