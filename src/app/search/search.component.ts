import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {distinctUntilChanged} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isClicked = false;
  searchForm: FormGroup ;
  searchText: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log('in search');
    this.searchForm = new FormGroup({
      'searchText': new FormControl(null, Validators.required)
    });
    this.onChange();
  }
  onChange() {
    this.searchForm.get('searchText').valueChanges.pipe(distinctUntilChanged()).subscribe((response) => {
      this.isClicked = false;
    });
  }
  onSearchClicked(text: HTMLInputElement) {
    console.log('i am called');
    console.log('From Button' + text.value);
    this.searchText = text.value;
     this.isClicked = true;
  }
  onLogout() {
    this.authService.logOut();
    this.router.navigate(['']);
  }
}
