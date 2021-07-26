import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private readonly contentTypeHeaderName: string = 'Content-Type';
  private readonly contentTypeHeaderJsonValue: string = 'application/json';

  constructor(private httpClient: HttpClient) { }
  /**
   * Método generico de busca a endpoints via http.
   * @param url: Caminho a ser buscado.
   * @param queryParams: Parametros enviados via routerLink.
   * @param headers: Array de configuração de headers.
   *
   */
  get(url: string, queryParams?: any, headers?: Array<HeadersRequest>): Observable<HttpResponse<any>> {
    return this.httpClient.get(url,
      {
        headers: this.getHeadersRequestOptions(headers),
        params: queryParams as any,
        observe: 'response'
      });
  }
  /**
   * Método generico de postagem a endpoints via http.
   * @param url: Caminho a enviado os dados.
   * @param data: valor(res) a serem inseridos/ modificados.
   * @param queryParams: Parametros enviados via routerLink.
   * @param headers: Array de configuração de headers.
   *
   */
  post(url: string, data: any, headers?: Array<HeadersRequest>, queryParams?: any): Observable<HttpResponse<any>> {
    return this.httpClient.post(url,
      data,
      {
        headers: this.getHeadersRequestOptions(headers),
        params: queryParams as any,
        observe: 'response'
      });
  }

  /**
   * Seta opções de header se passados.
   * @param headers: Array de configuração de headers.
   *
   */
  private getHeadersRequestOptions(headers?: Array<HeadersRequest>): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      [this.contentTypeHeaderName]: this.contentTypeHeaderJsonValue
    });

    if (headers) {
      headers.forEach(({ param, value }) => httpHeaders = httpHeaders.set(param, value));
    }

    return httpHeaders;
  }
}
export interface HeadersRequest {
  param: string;
  value: string;
}
