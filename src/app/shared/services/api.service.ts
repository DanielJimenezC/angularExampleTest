import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl: string = "https://weatherapi-com.p.rapidapi.com/search.json?q=London";

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<any> {
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': '9b1521e402mshe0a927ec07f7820p1bfd31jsn0a268e5f7361',
          }
          
          const requestOptions = {                                                                                                                                                                                 
            headers: new HttpHeaders(headerDict), 
          };

        return this.http.get(this.baseUrl, requestOptions);
    }
}