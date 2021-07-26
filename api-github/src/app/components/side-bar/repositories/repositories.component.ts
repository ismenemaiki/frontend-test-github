import { GitHubService } from './../../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repositories: any;
  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
    this.gitHubService.getRepos('ismenemaiki').subscribe(it => {
      it.forEach(element => {
        console.log(element)
      });
      this.repositories = it;
    });
  }
}
