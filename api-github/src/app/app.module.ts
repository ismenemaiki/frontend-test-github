import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './core/services/api.service';
import { GitHubService } from './services/github.service';
import { RepositoriesComponent } from './components/side-bar/repositories/repositories.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IssuesComponent } from './components/side-bar/issues/issues.component';
import { PullRequestsComponent } from './components/side-bar/pull-requests/pull-requests.component';
import { CommitsComponent } from './components/side-bar/commits/commits.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PaginationComponent } from './shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CommitsComponent,
    PullRequestsComponent,
    IssuesComponent,
    PaginationComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GitHubService,
    ApiService,
    HttpClient
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
