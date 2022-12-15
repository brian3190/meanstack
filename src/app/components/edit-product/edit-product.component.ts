import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product';
import { Customer } from '../../models/customer';
import { DataService } from '../../../data.service';


@Component({
    selector: 'edit-product',
    templateUrl: './edit-product.component.html',
    styles: []
})

export class EditProductComponent implements OnInit {
    selectedProduct: Product;

    constructor(private route: ActivatedRoute,
        private dataService: DataService) { }
    
    ngOnInit() {
        let productid: number = parseInt(this.route.snapshot.params['id']);
        this.dataService.getProductById(productid).subscribe(
            (data: Product) => this.selectedProduct = data,
            (err: any) => console.log(err),
            () => console.log('complete')
        );
    }

    setFavoriteProduct(): void {
        this.dataService.setFavoriteProduct(this.selectedProduct);
    }

    saveChanges(): void {
        this.dataService.updateProduct(this.selectedProduct)
            .subscribe(
                (data: void) => console.log(`${this.selectedProduct.name} updated successfully.`),
                (err: any) => console.log(err)
            );
    }
    
}
