import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment as config } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${config.test}`);
  }

  login(body){
    return this.http.post(`${config.hostServer}/api/user/login`, body);
  }

  getListTrans(body){
    return this.http.get(`${config.hostServer}/api/trans/history`, body);
  }

}
