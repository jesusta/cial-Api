import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoPostServicioService {

  api_ver_todo_post='https://gorest.co.in/public/v2/posts';
  constructor(private http:HttpClient) { }

  getTodoPost(){
    return this.http.get(this.api_ver_todo_post);
  }


}
