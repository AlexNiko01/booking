import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {Record} from './models/record';
import {ResponseRecord} from "./response/response-record";

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
    providedIn: 'root'
})
export class RecordService {

    constructor(private http: HttpClient) {
    }

    createRecord(date: Record): Observable<ResponseRecord> {
        return this.http.post<ResponseRecord>(
            'http://localhost/api/record',
            date,
            {headers: headers}
            );

    }
}
