import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing'

import { DataService } from './data.service';
import { Product } from './app/models/productModel';
import { fail } from 'assert';

describe('DataService Tests', () => {
    let dataService: DataService;
    let httpTestingController: HttpTestingController;

    let products: Product[] = [
        { productid: 1, name: 'Cup', price: 15, stock: 120 },
        { productid: 2, name: 'Mug', price: 12, stock: 200 },
        { productid: 3, name: 'Shirt', price: 30, stock: 150 },
            
    ]
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataService]
        });

        dataService = TestBed.get(DataService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should GET all products', () => {
        dataService.getAllBooks()
            .subscribe((data: Product[]) => {
                expect(data.length).toBe(3);
            });
        let productsRequest: TestRequest = httpTestingController.expectOne('/api/products');
        expect(productsRequest.request.method).toEqual('GET');

        //Generates Http Response
        productsRequest.flush(testBooks);
    });

    it('should return a ProductTrackerError', () => {
        dataService.getAllProducts()
            .subscribe(
                (data: Product[]) => fail('this should have been an error'),
                (err: ProductTrackerError) => {
                    expect(err.errorNumber).toEqual(200);
                    expect(err.friendlyMessage).toEqual('An error occurred retrieving data.')
                }
            );
        
        let productsRequest: TestRequest = httpTestingController.expectOne('/api/books');

        productsRequest.flush('error', {
            status: 500,
            statusText: 'Server Error'
        });

    });
})