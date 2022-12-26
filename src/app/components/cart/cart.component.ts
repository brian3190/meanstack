import { Component } from "@angular/core";
import { DataService } from '../../../data.service'

@Component({
    selector: "cart",
    templateUrl: "cart.component.html",
    styleUrls: ["cart.component.css"]
})

export class CartComponent {
    constructor(private dataservice: DataService) { }


}