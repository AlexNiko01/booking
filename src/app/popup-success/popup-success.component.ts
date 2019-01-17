import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';

@Component({
    selector: 'app-popup-success',
    templateUrl: './popup-success.component.html',
    styleUrls: ['./popup-success.component.scss']
})
export class PopupSuccessComponent implements OnInit {

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
    }

    public close() {
        this.modalService.destroy();
    }

}
