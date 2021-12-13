import { Component, OnInit } from '@angular/core';
import { AnimeService } from './services/anime/anime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title: string = 'Watchlist';
  animes:any = [];

  constructor(
    private Anime: AnimeService
  ) {}

  ngOnInit() {
    this.animes = this.Anime.animes;
  }
  
}