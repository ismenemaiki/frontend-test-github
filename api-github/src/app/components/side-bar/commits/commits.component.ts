import { GitHubService } from './../../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {
  commits: any;
  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
    this.gitHubService.getCommits('ismenemaiki', 'MaikiRodriguesIsmene').subscribe(
      ret => {
        console.log(ret);

        this.commits = ret;
      }
    );
  }

}
