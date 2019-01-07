import {Component, Input, OnInit} from '@angular/core';
import {log} from "util";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {LessonsService} from '../lessons.service'


@Component({
    selector: 'app-lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

    date: string;
    lessons: Array<object>;
    availableTimes: Array<string> = [
        '08:00 - 09:00',
        '18:00 - 19:00',
        '19:00 - 20:00',
        '20:00 - 21:00',
    ];

    constructor(private route: ActivatedRoute,
                private lessonsService: LessonsService) {
    }

    ngOnInit() {
        this.loadLessons();
    }

    loadLessons(): void {
        this.date = this.route.snapshot.paramMap.get('date');

        log(this.date);
        this.lessonsService.getLessons(this.date)
            .subscribe((lessons) => {
                this.lessons = lessons;
                lessons.forEach((lesson) => {
                    log(typeof lesson);
                })
            });
    }
}
