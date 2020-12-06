import { ProductType } from './ProductType'

export interface Nomenklatura {
    id: number,
    name: string,
    code?: string,
    lifestyle: number,
    basePrice: number,
    description: string,
    productType: ProductType
}


