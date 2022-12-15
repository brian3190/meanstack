import { Component, OnInit } from '@angular/core';

import { Product } from '../../../app/models/Product';
import { Customer } from '../../../app/models/Customer';
import { DataService } from '../../../data.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styles: []
})
export class AddProductComponent implements OnInit {
    constructor(private dataService: DataService) { }

    ngOnInit() { }

    saveProduct(formValues: any): void {
        let newProduct: Product = <Product>formValues;
        newProduct.productid = 0;
        console.log(newProduct);
        //console.warn('Save new product not yet implemented.');

        this.dataService.addProduct(newProduct).subscribe(
            (data: Product) => console.log(data),
            (err: any) => console.log(err)
        );
    }
}
