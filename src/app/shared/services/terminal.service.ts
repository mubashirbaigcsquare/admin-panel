import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";


@Injectable()
export class TerminalService {
    constructor(private http: Http) {}

    getTerminals() {
        return this.http
        .get('https://www.mocky.io/v2/5a1d48d12e0000662748b74f')
        .map(
            (response: Response) => {
                const data = response.json()
                return data
            }
        )
        .catch(this.handleError)
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