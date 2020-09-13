import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class freeApiService {
    constructor(private httpclient: HttpClient) { }
    getcomments(): Observable<any> {
        return this.httpclient.get("https://api.rootnet.in/covid19-in/notifications");
    }

}
