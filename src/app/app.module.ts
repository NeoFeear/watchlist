import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { AnimeComponent } from './anime/anime.component';
import { AnimeService } from './services/anime/anime.service';
import { AnimeNewComponent } from './anime/anime-new/anime-new.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeModifComponent } from './anime/anime-modif/anime-modif.component';

import { FilmComponent } from './film/film.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { FilmModifComponent } from './film/film-modif/film-modif.component';
import { FilmNewComponent } from './film/film-new/film-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeComponent,
    AnimeListComponent,
    AnimeNewComponent,
    AnimeModifComponent,
    AnimeDetailComponent,
    FilmComponent,
    FilmDetailComponent,
    FilmListComponent,
    FilmModifComponent,
    FilmNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FontAwesomeModule
  ],
  providers: [
    AnimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
