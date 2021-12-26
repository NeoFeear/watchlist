import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit {
  anime: any;
  trailer: any;

  constructor(
    private Anime: AnimeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.Anime.get(id).subscribe((value: any) => {
      this.anime = value;
      this.trailer = this.searchVideo(this.anime.title);
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
