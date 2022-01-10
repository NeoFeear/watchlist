export class Film {
    id?: string;
    title: string;
    status: string;
    scenarist: string;
    realisator: string;
    actors: string;
    genre: string;
    duree: string;
    synopsis: string;
    note: string;
    affiche: string;
  
    constructor() {
      this.title = '';
      this.status = '';
      this.scenarist = '';
      this.realisator = '';
      this.actors = '';
      this.duree = '';
      this.genre = '';
      this.synopsis = '';
      this.note = '';
      this.affiche = '';
    }
}
