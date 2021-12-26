import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../models/anime.model';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-anime-new',
  templateUrl: './anime-new.component.html',
  styleUrls: ['./anime-new.component.scss']
})
export class AnimeNewComponent implements OnInit {
  
  public anime!: Anime;

  constructor(
    private Anime: AnimeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.anime = new Anime();
  }

  add() {
    this.Anime.saveNewAnime(this.anime).subscribe(() => {
      this.anime = new Anime();
      this.router.navigate(['/animes']);
    })
  }

}
