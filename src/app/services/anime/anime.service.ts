import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { Anime } from 'src/app/models/anime.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private animes: any;
  private dbPath = '/animes';
  animeSubject = new Subject<any[]>();
  animesRef: AngularFirestoreCollection<Anime>;

  constructor(
    private db: AngularFirestore
  ) { 
    this.animesRef = db.collection(this.dbPath);
  }

  getAllAnimes(): any {
    return this.animesRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  getAnimeById(id: number) {
    let tmp;
    for (const anime of this.animes) {
      if (anime.id === id) {
        tmp = anime;
      }
    }
    return tmp;
  }

  get(id: any): any {
    return new Observable(obs => {
      this.animesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  saveNewAnime(anime: Anime):any {
    return new Observable(obs => {
      this.animesRef.add({...anime}).then(() => {
        obs.next();
      })
    })
  }

  update(anime: Anime) {
    return new Observable(obs => {
    this.animesRef.doc(anime.id).update(anime);
    obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`animes/${id}`).delete();
  }

  emitAnimeSubject() {
    this.animeSubject.next(this.animes.slice());
  }

}