import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../../models/customer';
import { Product } from '../../models/product';
import { ProductTrackerError } from '../../models/ProductTrackerError';
import { DataService } from '../../../data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: []
})

export class DashboardComponent implements OnInit {
    allProducts: Product[];
    allCustomers: Customer[];
    favoriteProduct: Product;

    constructor(private dataService: DataService,
                private route: ActivatedRoute,
                private title: Title) { }
    
    ngOnInit() {
        // Handled by resolver
        // this.dataService.getAllProducts().subscribe(
        //     (data: Product[] | ProductTrackerError) => this.allProducts = <Product[]>data,
        //     (err: ProductTrackerError) => console.log(err.friendlyMessage),
        //     () => console.log('All done getting products.')
        // );

        let resolvedData: Product[] | ProductTrackerError = this.route.snapshot.data['resolvedBooks'];

        if (resolvedData instanceof ProductTrackerError) {
            console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
        } else {
            this.allProducts = resolvedData;
        }
        this.dataService.getAllCustomers();
        this.favoriteProduct = this.dataService.favoriteProduct;
        

        this.title.setTitle('Product Tracker');
    }

    deleteProduct() {
        this.dataService.deleteProduct(productId)
            .subscribe(
                (data: void) => {
                    let index: number = this.allProducts.findIndex(product => product.productId === productId);
                    this.allProducts.splice(index, 1);
                },
                (err: any) => console.log(err)
            );
    }

}