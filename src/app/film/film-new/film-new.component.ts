import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.scss']
})
export class FilmNewComponent implements OnInit {

  public film!: Film;

  constructor(
    private Film: FilmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.film = new Film();
  }
  
  add() {
    this.Film.saveNewFilm(this.film).subscribe(() => {
      this.film = new Film();
      this.router.navigate(['/films']);
    })
  }

}