import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable, of  } from 'rxjs'

import { Product } from '../models/product';
import { DataService } from '../../data.service'
import { map, catchError } from 'rxjs/operators'
import { ProductTrackerError } from '../models/ProductTrackerError'

@Injectable()
export class ProductsResolverService implements Resolve<any | ProductTrackerError> {
    constructor(private dataService: DataService) { }

    // Subscribes to observable and deliver data via router
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[] | ProductTrackerError> {
        return this.dataService.getAllProducts().pipe(catchError(err => of(err)));
    }
}