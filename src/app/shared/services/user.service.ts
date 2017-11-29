import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    getUsers() {
        return this
                .http
                .get('http://www.mocky.io/v2/5a1e68c82f00009b19ee2d3a')
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