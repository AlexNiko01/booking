import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {LessonsComponent} from './lessons/lessons.component';
import {RecordComponent} from './record/record.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupSuccessComponent} from './popup-success/popup-success.component';


@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        LessonsComponent,
        RecordComponent,
        PopupSuccessComponent,

    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        FormsModule
    ],
    entryComponents: [
        PopupSuccessComponent,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
