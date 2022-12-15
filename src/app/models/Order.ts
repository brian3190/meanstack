export class OrderItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    productId: number;
    category: number;
    size: string;
    manufacturer: string;
    artId: number;
}

export class Order {
    orderid: number;
    orderdate: Date;
    ordernumber: string;
    items: OrderItem[];
}

