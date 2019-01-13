import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecordService} from "../record.service";
import {Record} from "../models/record";
import {log} from "util";

@Component({
    selector: 'app-record',
    templateUrl: './record.component.html',
    styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
    date: string;
    time: string;
    model = new Record();

    constructor(private route: ActivatedRoute,
                private recordService: RecordService,
                private router: Router) {
    }

    ngOnInit() {
        this.date = this.route.snapshot.paramMap.get('date');
        this.time = this.route.snapshot.paramMap.get('time');
    }

    onSubmit() {
        this.model.date = this.date;
        this.model.period = this.time;
        this.recordService.createRecord(this.model)
            .subscribe(response =>
                log(response), error => {
                console.log(error.message);
            });
    }

}
