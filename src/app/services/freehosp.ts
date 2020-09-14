import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class freeApiHos {
    constructor(private httpclient: HttpClient) { }
    gethos(): Observable<any> {
        return this.httpclient.get("https://api.rootnet.in/covid19-in/hospitals/beds");
    }
}
