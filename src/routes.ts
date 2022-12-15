import { CreateUserComponent } from './components/createuser.component'
import { ProductsComponent } from './components/products/products.component'
import { ProductDetailsComponent } from './components/products/product-details.component'
import { Error404Component } from './components/errors/404.component'
import { ProductsRouteActivator } from './components/products/product-route-activator.service'
import { CreateEventComponent } from './components/products/create-event.component'
import { EventListResolver } from './events/events-list-resolver.service'

export const appRoutes:Routes = [
    { path: 'user/new', component: CreateUserComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver} },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductsRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/main', pathMatch: 'full'}
]