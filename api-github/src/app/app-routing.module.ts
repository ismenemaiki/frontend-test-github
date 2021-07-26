import { IssuesComponent } from './components/side-bar/issues/issues.component';
import { RepositoriesComponent } from './components/side-bar/repositories/repositories.component';
import { PullRequestsComponent } from './components/side-bar/pull-requests/pull-requests.component';
import { CommitsComponent } from './components/side-bar/commits/commits.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: RepositoriesComponent },
  { path: 'commits', component: CommitsComponent },
  { path: 'pull-requests', component: PullRequestsComponent },
  { path: 'issues', component: IssuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
