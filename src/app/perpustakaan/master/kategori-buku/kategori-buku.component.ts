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
        console.log(response);
      }, error => {
        console.error(error);
      }
    )
  }

  detailData(id: string){
    this._kategoriBukuService.findById(id).subscribe(
      (repsonse: any) =>{
        console.log(repsonse);
        if(repsonse.status == 200){
          console.log(repsonse.body);
        }else {
          alert(`data kategori buku dengan ${id} tidak ditemukan!`);
        }
      }, error =>{
        console.log(error);
      }
    )
  }

  removeById(data: string){
    this._kategoriBukuService.delete(data).subscribe((resp : any) => {
      if(resp.status == 200){
        this.ngOnInit();
      }
    })
  }

}
