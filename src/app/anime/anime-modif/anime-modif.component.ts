import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-modif',
  templateUrl: './anime-modif.component.html',
  styleUrls: ['./anime-modif.component.scss']
})
export class AnimeModifComponent implements OnInit {
  anime: any;
  change: boolean = false;

  constructor(
    private Anime: AnimeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Anime.get(id).subscribe((value: any) => {
      this.anime = value;
    });
  }

  update(): void {
    this.Anime.update(this.anime).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 23000);
    });
    this.router.navigate(['/animes']);
  }

}
