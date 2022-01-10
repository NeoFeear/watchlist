import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})

export class FilmDetailComponent implements OnInit {
  film: any;
  trailer: any;
  url: string = 'https://www.youtube.com/embed/';
  urlSafe: SafeResourceUrl | undefined;

  constructor(
    private Film: FilmService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.Film.get(id).subscribe(async (value: any) => {
      this.film = value;
      this.trailer = await this.searchVideo(this.film.title);
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