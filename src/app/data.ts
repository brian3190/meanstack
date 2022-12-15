import { Product } from "./models/Product";
import { Customer } from "./models/Customer";

export const allCustomers: Customer[] = [
    { customerid: 1, firstName: 'Ben', lastName: 'Krazinsky', email: 'ben.krazinsky@gmail.com', phone: 65 - 2155 - 8989, address: { test }, createdOn: new Date("2019-10-01T00:00:01.30Z") },
    { customerid: 2, firstName: 'Dan', lastName: 'Brown', email: 'dan.brown@hotmail.com', phone: 64 - 7968 - 451, address: { test }, createdOn: new Date("2019-10-01T00:00:01.30Z"), isActive: true},
    { customerid: 3, firstName: 'Tam', lastName: 'Winfrey', email: 'tam.winfrey21@yahoo.com', phone: 91 - 6565 - 4896, address: { test }, createdOn: new Date("2019-10-01T00:00:01.30Z"), isActive: true}
];

export const allProducts: Product[] = [
    { productid: 1, name: 'Book', price: 120, stock: 999 },
    { productid: 2, name: 'Laptop', price: 2999, stock: 200 },
    { productid: 3, name: 'Sunglasses', price: 10, stock: 30 },
    { productid: 4, name: 'Gloves', price: 12, stock: 5 }
];
