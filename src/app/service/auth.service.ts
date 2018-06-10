import {HttpClient} from '@angular/common/http';
import {Injectable, OnDestroy} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {AuthError, SearchResponse} from '../models/response.model';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthService  {
  private api_URL1 = 'https://kgsearch.googleapis.com/v1/entities:search?query=google';
  private api_URL2 = '&limit=1&indent=True';
  private api_key: string;
  private _isLoggedIn = false;
  isInformedSubject: Subject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.isInformedSubject = new Subject<boolean>();
  }

  isAuthenticated(key: string) {
    const completeURL = this.api_URL1 + '' + '&key=' + key + this.api_URL2;
    console.log(completeURL);
    return this.http.get(completeURL).pipe(map(res => res), catchError(err => {
      console.log(err);
      return Observable.throw(err);
    })).subscribe((res: SearchResponse) => {
        this.api_key = key;
        this._isLoggedIn = true;
        this.isInformedSubject.next(true);
        this.router.navigate(['/search']);
      },
      (error: AuthError) => {
        this._isLoggedIn = false;
        this.isInformedSubject.next(false);
      },
      () => {
        // this.informObservable.of(this._isLoggedIn);
      });
  }

  isLogin() {
    return this._isLoggedIn;
  }

  logOut() {
    this.api_key = null;
    this._isLoggedIn = false;
  }
}

