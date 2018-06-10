import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {SearchComponent} from './search/search.component';
import {AuthGuard} from './service/auth-guard.service';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DisplayKnowledgeGraphComponent} from './components/display-knowledge-graph/display-knowledge-graph.component';
import {SearchService} from './service/search.service';
import {AuthService} from './service/auth.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './routing/routing.module';
import {LoadingModule} from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayKnowledgeGraphComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FlexLayoutModule ,
    AppRoutingModule,
    LoadingModule
  ],
  providers: [SearchService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
