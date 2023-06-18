import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPostComponent } from './editar-post/editar-post.component';
import { ListarPostComponent } from './listar-post/listar-post.component';

const routes: Routes = [
  { path: 'listar-post', component: ListarPostComponent },
  { path: 'editar-post/:id', component: EditarPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
