import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpContext } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import 'CONTENT_TYPE' from module '.\app\components\shared\add-header.interceptor';

import { allCustomers, allProducts } from './app/data';
import { Customer } from "./app/models/customer";
import { Product } from "./app/models/product";
import { Order, OrderItem } from "./app/models/order";

import { ProductTrackerError } from './app/models/ProductTrackerError';
import { CONTENT_TYPE } from './app/shared/add-header.interceptor';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    public products: Product[] = [];
    public favoriteProduct: Product;
    public order: Order = new Order(); 

    setFavoriteProduct(popularProduct: Product): void {
        this.favoriteProduct = popularProduct;
    }

    getAllCustomers(): Observable<Customer[] | ProductTrackerError> {
        console.log('Getting all customers from the server');
        return this.http.get<Product[]>('/api/products')
            .pipe(
                catchError(err => this.handleHttpError(err))
            );
    }

    getCustomerById(id: number): Observable<Customer> {
        return this.http.get<Customer>(`/api/customers/${id}`, {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'my-token'
            })
        })
    }

    getAllProducts(): Observable<Product[] | ProductTrackerError> {
        console.log('Getting all products from the server');
        return this.http.get<Product[]>('/api/products', {
            context: new HttpContext().set(CONTENT_TYPE, 'application/xml')    
        })
            .pipe(
                map(data => {
                    this.products = data;
                    return;
                })  
                //catchError(err => this.handleHttpError(err))
                
            );
    }

    private handleHttpError(error: HttpErrorResponse): Observable <ProductTrackerError> {
        let dataError = new ProductTrackerError();
        dataError.errorNumber = 200;
        dataError.message = error.statusText;
        dataError.friendlyMessage = 'An error occurred retrieving data.';
        return throwError(dataError);
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`/api/products/${id}`, {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'my-token'
            })
        })
    }

    addToOrder(product: Product) {
        let item: OrderItem;

        item = this.order.items.find(o => o.artId == product.artId);

        if (item) {
            item.quantity++;
        } else {
           const newItem = new OrderItem();
            newItem.productId = product.productId;
            newItem.name = product.name;
            newItem.price = product.price;
            newItem.artId = product.artId;
            newItem.category = product.category;
            newItem.size = product.size;
            newItem.quantity = 1; 
        }
        

        this.order.items.push(newItem);
    }

    addProduct(newProduct: Product): Observable<Product> {
        return this.http.post<Product>('/api/products', newProduct, {
            header: new HttpHeader({
                'Content-Type': 'application/json'
            })
        });
    }

    updateProduct(updatedProduct: Product): Observable<void> {
        return this.http.put<void>(`/api/products/${updatedProduct.productid}`, updatedProduct, {
            header: new HttpHeader({
                'Content-Type': 'application/json'
            })
        });
    }

    deleteProduct(productid: number): Observable<void> {
        return this.http.delete<void>(`/api/books/${productid}`);
    }
}
