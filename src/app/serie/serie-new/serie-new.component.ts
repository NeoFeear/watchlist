import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-serie-new',
  templateUrl: './serie-new.component.html',
  styleUrls: ['./serie-new.component.scss']
})
export class SerieNewComponent implements OnInit {

  public serie!: Serie;

  constructor(
    private Serie: SerieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serie = new Serie();
  }

  add() {
    this.Serie.saveNewSerie(this.serie).subscribe(() => {
      this.serie = new Serie();
      this.router.navigate(['/series']);
    })
  }

}
