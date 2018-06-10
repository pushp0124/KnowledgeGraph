
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {SearchResponse} from '../models/response.model';


@Injectable()
export class SearchService {
  api_URL1 = 'https://kgsearch.googleapis.com/v1/entities:search?query=' ;
  api_URL2 = '&limit=1&indent=True' ;
  searchText: string;
  constructor(private http: HttpClient) {
    console.log('in service');
  }
  getData(_searchText: string): Observable<SearchResponse> {
    this.searchText = _searchText;
    const completeURL = this.api_URL1 + this.searchText + '&key=AIzaSyAWJvezQnU47COUpN-BtZU0CBrrJFR0LuA' + this.api_URL2;
     return this.http.get<SearchResponse>(completeURL);
  }
}
