import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VerPostServicioService } from '../Servicios/ver_post/ver-post-servicio.service';
@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css']
})
export class EditarPostComponent implements OnInit {
  pots:any;
  country:any
  constructor(private router:Router,private verPostservice:VerPostServicioService,private activedrouter:ActivatedRoute) { }
  
  ngOnInit(): void {
    let id =this.activedrouter.snapshot.paramMap.get('id');
    if(id)
    {
      this.verPostservice.getPost(id).subscribe(
        (resul:any) => {
         
          this.pots=resul;
          console.log("el post es : ",this.pots);
         
        },
        (error) => { console.log("Error: ",error)}
      );
    }
this.verPostservice.getCountry().subscribe(result=>this.country=result);
  }

  atras(){
    

    this.router.navigate(['listar-post'])
  }

}
