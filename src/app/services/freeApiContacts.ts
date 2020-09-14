import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class freeApiCont {
    constructor(private httpclient: HttpClient) { }
    getcontacts(): Observable<any> {
        return this.httpclient.get("https://api.rootnet.in/covid19-in/contacts");
    }
}
