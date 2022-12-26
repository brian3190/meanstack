import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'

@Component({
    template: `
        <h1 class="events-list">Events List</h1>
    `,
    styles: [`
        .errorMessage {
            margin-top: 150px;
            font-size: 170px;
            text-align: center;
        }`]
})

export class EventsListComponent implements OnInit {
    events: any[]
    
    constructor(private eventService: EventService, private toastr: ToastrService) {

    }

    ngOnInit() {
        this.events = this.eventService.getEvents().subscribe(events => { this.events = events})
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}