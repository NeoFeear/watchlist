import { Component, OnInit, Input } from '@angular/core';
import { AnimeService } from '../services/anime/anime.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.scss']
})

export class AnimeComponent implements OnInit {

    faEdit = faEdit;

    @Input() id?: number;
    @Input() index?: number;
    @Input() animeTitle?: string;
    @Input() animeAutor?: string;
    @Input() animeRealisator?: string;
    @Input() animeStudio?: string;
    @Input() animeNbEpisodes?: string;
    @Input() animeSynopsis?: string;
    @Input() animeNote?: number;
    @Input() animeAffiche?: string;

    constructor(
        private Anime: AnimeService
    ) { }

    ngOnInit(): void {
    }

    suppr():void {
        this.Anime.delete(this.id);
    }

}
