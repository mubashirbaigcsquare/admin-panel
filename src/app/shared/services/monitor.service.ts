import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MonitorService {
    constructor(private http: Http) {}

    getTerminalsWithDevices() {
        return this
                .http
                .get('http://www.mocky.io/v2/5a1d1aa32e0000de1748b668')
                .map(
                    (response: Response) => {
                        const data = response.json()
                        return data
                    }
                )
                .catch(this.handleError)
                // .catch(res => Observable.throw(res.json())
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        // let errMsg = (error.message) ? error.message :
        //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.log(error); // log to console instead
        return Observable.throw(error.json());
    }
}