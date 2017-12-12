import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PasswordService {
    constructor(private http: Http) {}

    updatePassword(password: string) {
        const headers = new Headers({'Content-Type': 'application/json'})
        return this
                .http
                .put('https://www.mocky.io/v2/5a1fe850310000231bc0b057',password, {headers: headers})
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