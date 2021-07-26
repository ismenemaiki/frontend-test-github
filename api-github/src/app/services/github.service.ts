import { ApiService } from './../core/services/api.service';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class GitHubService {
  protected basePath = environment.github;
  private readonly headers = new Headers({
    "Accept": "application/vnd.github.v3+json"
  });

  constructor(
    protected apiService: ApiService,
    @Optional() @Inject('basePath') basePath: string) {
    if (basePath) {
      this.basePath = basePath;
    }
  }
  /**
   * Busca os repositorios de um usuário.
   */
  getRepos(user: string): Observable<any> {
    return this.apiService.get(`${this.basePath}/users/${user}/repos`, this.headers)
    .pipe(map(ret => ret.body));
  }
  getCommits(user: string, repo: string): Observable<any> {
    return this.apiService.get(`${this.basePath}/repos/${user}/${repo}/commits`, this.headers)
    .pipe(map(ret => ret.body));
  }
}
