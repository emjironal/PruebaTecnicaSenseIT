import { OrderInfo } from "./orderinfo"
import { Product } from './product'

export interface Order
{
    order: OrderInfo,
    orderDetails: Product[]
}