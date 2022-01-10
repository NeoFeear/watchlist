import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from 'src/app/services/serie/serie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {
  serie: any;
  trailer: any;
  url: string = 'https://www.youtube.com/embed/';
  urlSafe: SafeResourceUrl | undefined;

  constructor(
    private Serie: SerieService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.Serie.get(id).subscribe(async (value: any) => {
      this.serie = value;
      this.trailer = await this.searchVideo(this.serie.title);
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.trailer);
    });
  }

  // Search video on Youtube via API and return the first result
  async searchVideo(title: string) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}%20bande%20annonce%20vf&key=AIzaSyB8B3FEwiqmIyefwNQ_q1mLR9a1sysTYyc`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.items[0].id.videoId;
      });
  }

}
