import { ThemeSwitcher } from '@/utils/themeSwitcher'
import { Specialisation } from "@/store/products/types";
import { User } from "@/store/user/types";

export interface RootState {
  navbarState: boolean;
  theme: ThemeSwitcher;
  users: User[];
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
  id: number;
  name: string;
}
