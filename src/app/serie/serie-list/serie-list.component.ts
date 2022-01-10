import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie/serie.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss']
})
export class SerieListComponent implements OnInit {
  series!: any;

  constructor(
    private Serie: SerieService
  ) { }

  ngOnInit(): void {
    this.Serie.getAllSeries().subscribe((data: any) => {
      this.series = _.orderBy(data, ['status', 'titre']);
    });
  }

}
