import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {AuthService} from '../../service/auth.service';
import {catchError, map} from 'rxjs/operators';
import {AuthError, SearchResponse} from '../../models/response.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loggedIn = true;
  loginForm: FormGroup;
  private subscription;
  isShow = false;
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'api-key': new FormControl(null, Validators.required)
    });
    this.subscription = this.authService.isInformedSubject.subscribe((response) => {
        this.loggedIn = response;
        console.log('Hi from Login' + response);
        this.isShow = false;
      },
      (err) => {
        console.log(err);
        this.isShow = false;
      });
  }

  onLogin(key: HTMLInputElement) {
    this.isShow = true;
    this.authService.isAuthenticated(key.value);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
