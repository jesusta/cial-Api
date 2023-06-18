import { Component, OnInit } from '@angular/core';
import { TodoPostServicioService } from '../Servicios/todo-post-servicio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {

  list_post:any;
  constructor(private todo_list_service:TodoPostServicioService,private router:Router) { }

  ngOnInit(): void {
     this.todo_list_service.getTodoPost().subscribe(result=>this.list_post=result);
  }

  ver_Post(id:string){
    
    this.router.navigate(['/'])
    this.router.navigate(['editar-post/'+id])
  }
}