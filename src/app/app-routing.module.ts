import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AddProductComponent } from './components/add-product/add-product.component'
import { AddCustomerComponent } from './components/add-customer/add-customer.component'
import { EditProductComponent } from './components/edit-product/edit-product.component'
import { ProductsResolverService } from './shared/products-resolver.service'
import { Error404Component } from './components/errors/404.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent, resolve: {resolvedBooks: ProductsResolverService } },
    { path: 'addProduct', component: AddProductComponent },
    { path: 'addCustomer', component: AddCustomerComponent },
    { path: 'editProduct/:id', component: EditProductComponent },
    { path: '**', pathMatch: 'full', component: Error404Component }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }