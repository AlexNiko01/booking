import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {Record} from './models/record';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
    providedIn: 'root'
})
export class RecordService {

    constructor(private http: HttpClient) {
    }

    createRecord(date: Record): Observable<Record[]> {
        return this.http.post<any>('http://localhost/api/record',
            date, {headers: headers}).pipe(
            map((response) => {
                if (!response.success) {
                    throw new Error(response.error);
                }
                return response;
            }));

    }
}
