export class Customer {
    customerid: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    address:
        {
            type: string,
            street: string,
            city: string,
            state: string,
            country: string,
            postalCode: number
        };
    createdOn: Date;
    isActive: Boolean;
}
