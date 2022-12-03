import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) { }

  getMethod() {
    return this.http.get(this.url);
  }

  getSingle(id:any) {
    return this.http.get(this.url+"/"+id);
  }

  postMethod(data:any) {
    return this.http.post(this.url, data);
  }

  putMethod(id:any, data:any) {
    return this.http.put(this.url+"/"+id, data);
  }
  
  deleteMethod(id:any) {
    return this.http.delete(this.url+"/"+id, id);
  }

}
