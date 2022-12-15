import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ProductTrackerErrorHandlerService } from './product-tracker-error-handler.service'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AddProductComponent } from './components/add-product/add-product.component'
import { AddCustomerComponent } from './components/add-customer/add-customer.component'
import { EditProductComponent } from './components/edit-product/edit-product.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { CartComponent } from './components/cart/cart.component'
import { CoreModule } from './core/core.module'
import { AddHeaderInterceptor } from './shared/add-header.interceptor'
import { LogResponseInterceptor } from './shared/log-response.interceptor'


import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AuthController } from './auth/auth.controller';
import { CompareToDirective } from './directives/compareTo.directive';
import { GithubContributorService } from
    '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from './app/components/webDevTec.service';
import { NavbarDirective } from './app/components/navbar/navbar.directive';
import { MalarkeyDirective } from './app/components/malarkey/malarkey.directive';

import { EventsAppComponent } from './app/components/malarkey/malarkey.directive'
import { EventsListComponent } from './app/component'
import { EventThumbnailComponent } from './app/component'
import { EventDetailsComponent, } from './app/component'
import { NavBarComponent } from './app/component'   
import { CreateUserComponent } from './app/component'   
import { Error404Component } from './app/component/errors/404.component'    
import { EventRouteActivator } from './app/component/errors/404.component'    
import { EventListResolver } from './events/events-list-resolver.service'
import { EventService } from './events/events-list-resolver.service'
import { ToastrService } from './events' 
    
@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AddProductComponent,
        EditProductComponent,
        CartComponent,
        AddCustomerComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateUserComponent,
        Error404Component
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        CoreModule,
        HttpClientModule
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        { provide: ErrorHandler, useClass: ProductTrackerErrorHandlerService},
        { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
    
export class AppModule { } 

export function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}

