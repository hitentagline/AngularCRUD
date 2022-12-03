import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  { path:'album/:id', component: AlbumComponent },
  { path:'album', component: AlbumComponent },
  { path:'albumList', component: AlbumListComponent },

  { path:'**', redirectTo: 'albumList' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
