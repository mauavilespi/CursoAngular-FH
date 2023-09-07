import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';

const GIPHY_API_KEY: string = 'b5sQvcoH4SHQTI2Cx9VyzdQqSXerFDND';

@Injectable({ providedIn: 'root' })

export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    //! Servicio inyectado la primera vez
    this.loadLocalStorage();
    console.log("Gifs Service Ready");
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  public searchTag( tag: string ): void {
    if (tag.length == 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search/`, { params })
      .subscribe( resp => {
        this.gifList = resp.data;
      } );

  }

  private organizeHistory( tag: string ) {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0,10);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history',  JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if ( !localStorage.getItem('history') ) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );
    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag(this._tagsHistory[0]);
  }

}
