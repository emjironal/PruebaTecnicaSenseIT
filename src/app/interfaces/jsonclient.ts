import { Client } from './client';

export interface JsonClient
{
    offset: number,
    total: number,
    results: Client[],
    meta: Object
}