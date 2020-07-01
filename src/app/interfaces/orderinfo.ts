export interface OrderInfo
{
    id: number,
    customerId: string,
    employeeId: number,
    orderDate: Date,
    requiredDate: Date
    shipVia: number,
    freight: number
    shipName: string,
    shipAddress: string,
    shipCity: string,
    shipPostalCode: string,
    shipCountry: string
}