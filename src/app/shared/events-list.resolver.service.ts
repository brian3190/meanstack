import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

import { EventService } from './event.service'
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
        
    }

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events))
    }
}