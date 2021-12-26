import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeModifComponent } from './anime/anime-modif/anime-modif.component';
import { AnimeNewComponent } from './anime/anime-new/anime-new.component';

import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { FilmModifComponent } from './film/film-modif/film-modif.component';
import { FilmNewComponent } from './film/film-new/film-new.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  // ANIMES
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
  },

  // FILMS
  {
    path: "films",
    component: FilmListComponent
  },
  {
    path: "film/new",
    component: FilmNewComponent
  },
  {
    path: "film/modif/:id",
    component: FilmModifComponent
  },
  {
    path: "film/detail/:id",
    component: FilmDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
