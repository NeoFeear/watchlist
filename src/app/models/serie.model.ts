export class Serie {
    id?: string;
    titre: string;
    status: string;
    genres: string;
    createurs: string;
    producteurs: string;
    acteurs: string;
    nbSaisons: number;
    nbEpisodes: number;
    synopsis: string;
    note: string;
    affiche: string;

    constructor() {
        this.titre = '';
        this.status = '';
        this.genres = '';
        this.createurs = '';
        this.producteurs = '';
        this.acteurs = '';
        this.nbSaisons = 0;
        this.nbEpisodes = 0;
        this.synopsis = '';
        this.note = '';
        this.affiche = '';
    }
}
