import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MedColStu {
    constructor(private httpclient: HttpClient) { }
    getmed(): Observable<any> {
        return this.httpclient.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges");
    }
    getmedforselected(stateSelected: string): Observable<any> {
        let param = new HttpParams().set("state", stateSelected);
        return this.httpclient.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges", { params: param });
    }
}