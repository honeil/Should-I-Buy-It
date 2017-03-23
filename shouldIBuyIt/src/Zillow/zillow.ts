import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs';
import { parseString } from 'xml2js';


@Injectable()
export class ZillowAPI {
    propertyData: any = {};
    private baseUrl= "http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz1fmp99fe22z_634pb&zpid=83000350";
    private testUrl= "https://jsonplaceholder.typicode.com/users";
    constructor(private http: Http){
    }
    

    getZillowToJSON(){
        const headers = new Headers();
        headers.append('Accept', 'application/xml');
        return new Promise (resolve => {
            this.http.get(this.baseUrl, {headers : headers}).subscribe(res => parseString(res, (err, result) => {
                resolve(result.json())
            }));
        })
    }

       
}