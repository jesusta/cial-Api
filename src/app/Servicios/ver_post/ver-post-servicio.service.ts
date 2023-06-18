import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VerPostServicioService {

  api_ver_post='https://gorest.co.in/public/v2/posts/';
  api_contry='https://api.covid19api.com/countries';
  constructor(private http:HttpClient) { }

  getPost(id:string){
    return this.http.get(this.api_ver_post+id);
  }
getCountry(){
  return this.http.get(this.api_contry);
}



}
