import {Component, OnInit} from '@angular/core';
import {Record} from '../models/record';
import {ActivatedRoute} from '@angular/router';
import {RecordService} from '../record.service';
import {SuccessComponent} from '../success/success.component';


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
                private successComponent: SuccessComponent
    ) {
    }

    ngOnInit() {
        this.date = this.route.snapshot.paramMap.get('date');
        this.time = this.route.snapshot.paramMap.get('time');
    }

    onSubmit() {
        this.model.date = this.date;
        this.model.period = this.time;
        this.recordService.createRecord(this.model)
            .subscribe((response) => {
                    // if (response.success === true) {
                        this.successComponent.initSuccessModal();
                    // }
                    console.log(response);
                }
            );
    }

}
