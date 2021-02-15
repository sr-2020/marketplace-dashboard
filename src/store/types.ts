export interface RootState {
    navbarState: boolean
}

export interface BaseEntity {
    id: number
}

export interface BaseNamedEntity extends BaseEntity {
    name: string
}

export enum LifeStyles {
    Wood = 'wood',
    Bronze = 'bronze',
    Silver = 'silver',
    Gold = 'gold',
    Platinum = 'platinum',
    Irridium = 'irridium'
}