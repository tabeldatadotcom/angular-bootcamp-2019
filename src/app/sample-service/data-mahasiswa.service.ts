import { Injectable } from '@angular/core';

@Injectable()
export class DataMahasiswaService {

  private _list: string[] = [];

  constructor() { 
    this._list = ['001', '002', '003'];
  }

  get list(): Array<string>{
    return this._list;
  }

 addItem(data: string){
    this.list.push(data);
  }

}
