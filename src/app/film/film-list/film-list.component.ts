import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film/film.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films!: any;

  constructor(
    private Film: FilmService
  ) { }

  ngOnInit(): void {
    this.Film.getAllFilms().subscribe((data: any) => {
      this.films = _.orderBy(data, ['status', 'title']);
    });
  }

}
