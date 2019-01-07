import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView
} from 'angular-calendar';
import {formatDate, Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    view: CalendarView = CalendarView.Month;
    viewDate: Date = new Date();
    refresh: Subject<any> = new Subject();

    CalendarView = CalendarView;

    events: CalendarEvent[] = [];
    activeDayIsOpen: boolean = true;

    constructor(
        private location: Location,
        private router: Router
    ) {
    }

    ngOnInit() {
    }


    dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            this.viewDate = date;
            this.router.navigate([`lessons/${date.getFullYear()}-${(date.getMonth()) + 1}-${date.getDate()}`]);
        }
    }

    handleEvent(action: string, event: CalendarEvent): void {
        console.log(event, action);
    }

    eventTimesChanged({
                          event,
                          newStart,
                          newEnd
                      }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }


}
