import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) { }

  getMethod(): Observable<any> {
    // const header = new HttpHeaders()
    //   .set('Token', 'Hiten 9090909090')
    //   .set('Content-Type', 'Application/json');

    let header = new HttpHeaders()
    header = header.set('content-set','hiten')
    header = header.append('content-append','hiten');

    return this.http.get(this.url, { headers: header});
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
