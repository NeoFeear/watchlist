import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime/anime.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})

export class AnimeDetailComponent implements OnInit {
  anime: any;
  trailer: any;
  url: string = 'https://www.youtube.com/embed/';
  urlSafe: SafeResourceUrl | undefined;

  constructor(
    private Anime: AnimeService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.Anime.get(id).subscribe(async (value: any) => {
      this.anime = value;
      this.trailer = await this.searchVideo(this.anime.title);
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