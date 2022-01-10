import { Component, Input, OnInit } from '@angular/core';
import { SerieService } from '../services/serie/serie.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})

export class SerieComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  @Input() id?: number;
  @Input() index?: number;
  @Input() serieTitre?: string;
  @Input() serieStatus?: string;
  @Input() serieGenres?: string;
  @Input() serieCreateurs?: string;
  @Input() serieProducteurs?: string;
  @Input() serieActeurs?: string;
  @Input() serieNbSaisons?: number;
  @Input() serieNbEpisodes?: number;
  @Input() serieSynopsis?: string;
  @Input() serieNote?: number;
  @Input() serieAffiche?: string;

  constructor(
    private Serie: SerieService
  ) { }

  ngOnInit(): void {
  }

  suppr():void {
    if (confirm("Voulez-vous vraiment supprimer cette série ?")) {
        this.Serie.delete(this.id);
    }
}

}
