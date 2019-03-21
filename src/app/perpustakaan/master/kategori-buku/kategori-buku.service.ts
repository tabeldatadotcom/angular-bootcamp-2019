import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KategoriBukuService {

  constructor(private _httpClient: HttpClient) { }

  findAll(){
    return this._httpClient.get('/api/kategori/buku/list');
  }
}
