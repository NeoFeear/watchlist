import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-film-modif',
  templateUrl: './film-modif.component.html',
  styleUrls: ['./film-modif.component.scss']
})

export class FilmModifComponent implements OnInit {
  film: any;
  change: boolean = false;

  constructor(
    private Film: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Film.get(id).subscribe((value: any) => {
      this.film = value;
    });
  }

  update(): void {
    this.Film.update(this.film).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 23000);
    });
    this.router.navigate(['/films']);
  }

}
