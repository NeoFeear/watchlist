import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  @Input() id?: number;
  @Input() index?: number;
  @Input() filmTitle?: string;
  @Input() filmStatus?: string;
  @Input() filmAutor?: string;
  @Input() filmRealisator?: string;
  @Input() filmDuree?: string;
  @Input() filmSynopsis?: string;
  @Input() filmNote?: number;
  @Input() filmAffiche?: string;

  constructor(
    private Film: FilmService
  ) { }

  ngOnInit(): void {
  }

  suppr():void {
    if (confirm("Voulez-vous vraiment supprimer ce film ?")) {
      this.Film.delete(this.id);
    }
  }

}