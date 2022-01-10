import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-serie-modif',
  templateUrl: './serie-modif.component.html',
  styleUrls: ['./serie-modif.component.scss']
})
export class SerieModifComponent implements OnInit {
  serie: any;
  change: boolean = false;

  constructor(
    private Serie: SerieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Serie.get(id).subscribe((value: any) => {
      this.serie = value;
    });
  }

  update(): void {
    this.Serie.update(this.serie).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 23000);
    });
    this.router.navigate(['/series']);
  }

}