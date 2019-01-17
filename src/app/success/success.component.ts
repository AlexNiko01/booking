import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {PopupSuccessComponent} from '../popup-success/popup-success.component';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
    }

    initSuccessModal() {
        const inputs = {
            message: 'Record has been created!'
        };
        this.modalService.init(PopupSuccessComponent, inputs, {});
    }
}
