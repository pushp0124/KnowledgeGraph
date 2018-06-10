import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from '../search/search.component';
import {AuthGuard} from '../service/auth-guard.service';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

const appRoutes: Routes = [{path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  {path: '', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
