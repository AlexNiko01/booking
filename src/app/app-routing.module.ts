import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LessonsComponent} from './lessons/lessons.component';
import {CalendarComponent} from "./calendar/calendar.component";

const routes: Routes = [
    {path: 'lessons/:date', component: LessonsComponent},
    {path: 'calendar', component: CalendarComponent},
    { path: '', redirectTo: '/calendar', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
