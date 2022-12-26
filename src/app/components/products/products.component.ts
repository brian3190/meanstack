import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    selector: "product-list",
    templateUrl: "products.component.html",
    styleUrls: ["products.component.css"]
})
export default class Products implements OnInit {
    constructor(public store: DataService) { }
    
    ngOnInit(): void {
        this.store.loadProducts()
            .subscribe(() => {
                
            });
    }
}