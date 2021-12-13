import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';

import { AnimeService } from './services/anime/anime.service';
import { HomeComponent } from './home/home.component';
import { AnimeNewComponent } from './anime-new/anime-new.component';
import { AnimeModifComponent } from './anime-modif/anime-modif.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'animes',
    component: AnimeListComponent
  },
  {
    path: 'newAnime',
    component: AnimeNewComponent
  },
  {
    path: 'modifAnime/:id',
    component: AnimeModifComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeComponent,
    AnimeListComponent,
    AnimeNewComponent,
    AnimeModifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AnimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
