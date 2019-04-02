import {Injectable} from '@angular/core';

@Injectable()
export class DataMahasiswaService {

  private _list: string[] = [];
  private data: string;

  constructor() {
    this._list = ['001', '002', '003'];
  }

  get list(): Array<string> {
    return this._list;
  }

  addItem(data: string) {
    this._list.push(data);
  }

}
