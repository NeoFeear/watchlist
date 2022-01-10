import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime/anime.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animes!: any;

  constructor(
    private Anime: AnimeService
  ) { }

  ngOnInit(): void {
    this.Anime.getAllAnimes().subscribe((data: any) => {
      this.animes = _.orderBy(data, ['status', 'title']);
    });
  }

}