import { Component, OnInit } from '@angular/core';
import { KategoriBuku } from './kategory-buku.model';
import { KategoriBukuService } from './kategori-buku.service';

@Component({
  selector: 'app-kategori-buku',
  templateUrl: './kategori-buku.component.html',
  styleUrls: ['./kategori-buku.component.css']
})
export class KategoriBukuComponent implements OnInit {

  list: Array<KategoriBuku> = [];

  constructor(private _kategoriBukuService: KategoriBukuService) { }

  ngOnInit() {
    this._kategoriBukuService.findAll().subscribe(
      (response: any) => {
        this.list = response;
      }, error => {
        console.error(error);
      }
    )
  }

}
