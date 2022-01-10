import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { Serie } from 'src/app/models/serie.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private series: any;
  private dbPath = '/series';
  serieSubject = new Subject<any[]>();
  seriesRef: AngularFirestoreCollection<Serie>;

  constructor(
    private db: AngularFirestore
  ) { 
    this.seriesRef = db.collection(this.dbPath);
  }

  getAllSeries(): any {
    return this.seriesRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  getSerieById(id: number) {
    let tmp;
    for (const serie of this.series) {
      if (serie.id === id) {
        tmp = serie;
      }
    }
    return tmp;
  }

  get(id: any): any {
    return new Observable(obs => {
      this.seriesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  saveNewSerie(serie: Serie):any {
    return new Observable(obs => {
      this.seriesRef.add({...serie}).then(() => {
        obs.next();
      })
    })
  }

  update(serie: Serie) {
    return new Observable(obs => {
      this.seriesRef.doc(serie.id).update(serie);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`series/${id}`).delete();
  }

  emitAnimeSubject() {
    this.serieSubject.next(this.series.slice());
  }
}
