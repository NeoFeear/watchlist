import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  animes: any = [];

  constructor(
    private Anime: AnimeService
  ) { }

  ngOnInit(): void {
    this.animes = this.Anime.animes;
  }

}