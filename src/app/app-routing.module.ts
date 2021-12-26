import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeModifComponent } from './anime/anime-modif/anime-modif.component';
import { AnimeNewComponent } from './anime/anime-new/anime-new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "animes",
    component: AnimeListComponent
  },
  {
    path: "anime/new",
    component: AnimeNewComponent
  },
  {
    path: "anime/modif/:id",
    component: AnimeModifComponent
  },
  {
    path: "anime/detail/:id",
    component: AnimeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
