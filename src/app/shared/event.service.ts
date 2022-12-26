import { Injectable } from '@angular/core'
import Events from 'stripe/lib/resources/Events'
import { Subject } from 'rxjs'

@Injectable()
export class EventService {
    getEvents() {
        let subject = new Subject()
        setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100)
        return subject
    }

    getEvent(id: number) {
        return EVENTS.find(event => event.id === id)
    }
}

const EVENTS = 