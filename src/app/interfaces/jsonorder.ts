import { Order } from './order';

export interface JsonOrder
{
    results: Order[],
    responseStatus: Object
} //end JsonOrder