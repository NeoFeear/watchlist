import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { Film } from 'src/app/models/film.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films: any;
  private dbPath = '/films';
  filmSubject = new Subject<any[]>();
  filmsRef: AngularFirestoreCollection<Film>;

  constructor(
    private db: AngularFirestore
  ) { 
    this.filmsRef = db.collection(this.dbPath);
  }

  getAllFilms(): any {
    return this.filmsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  getFilmById(id: number) {
    let tmp;
    for (const film of this.films) {
      if (film.id === id) {
        tmp = film;
      }
    }
    return tmp;
  }

  get(id: any): any {
    return new Observable(obs => {
      this.filmsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  saveNewFilm(film: Film):any {
    return new Observable(obs => {
      this.filmsRef.add({...film}).then(() => {
        obs.next();
      })
    })
  }

  update(film: Film) {
    return new Observable(obs => {
      this.filmsRef.doc(film.id).update(film);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`animes/${id}`).delete();
  }

  emitAnimeSubject() {
    this.filmSubject.next(this.films.slice());
  }
}
