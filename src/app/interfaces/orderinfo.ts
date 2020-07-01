export interface OrderInfo
{
    id: number,
    customerId: string,
    employeeId: number,
    orderDate: string,
    requiredDate: string,
    shipVia: number,
    freight: number
    shipName: string,
    shipAddress: string,
    shipCity: string,
    shipPostalCode: string,
    shipCountry: string
} //end OrderInfo