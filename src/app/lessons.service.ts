import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {Lesson} from "./models/lesson";
import {map} from "rxjs/operators";

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
    providedIn: 'root'
})

export class LessonsService {

    constructor(private http: HttpClient) {
    }

    getLessons(date): Observable<Lesson[]> {
        return this.http.get<any>('http://localhost/api/lesson', {
            headers: headers,
            params: {
                date: date
            }
        }).pipe(
            map((response) => {
                if (!response.success) {
                    throwError(response.error);
                }

                return response.lessons as Lesson[]; // kind of useless
            }));
    }
}
