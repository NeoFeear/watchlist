import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  animeName = 'FullMetal Alchemist';
  animeOnAir = "En BluRay";
  animeAffiche = 'https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  ngGetOnAir() {
    return this.animeOnAir;
  }

}
