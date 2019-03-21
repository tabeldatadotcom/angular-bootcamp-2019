import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KategoriBukuService } from '../kategori-buku.service';
import { Router, ActivatedRoute } from '@angular/router';
import { KategoriBuku } from '../kategory-buku.model';

@Component({
  selector: 'app-detail-kategori-buku',
  templateUrl: './detail-kategori-buku.component.html',
  styleUrls: ['./detail-kategori-buku.component.css']
})
export class DetailKategoriBukuComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private _kategoriBukuService: KategoriBukuService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: this._formBuilder.control(''),
      name: this._formBuilder.control(''),
      keterangan: this._formBuilder.control('')
    });

    this._activatedRoute.params.subscribe(params => {
      const kode = params['kode'];
      this._kategoriBukuService.findById(kode).subscribe((response:any) => {
        if(response.status == 200){
          console.log(response.body);
          const value: KategoriBuku = response.body
          this.formGroup.patchValue({
            id: value.id,
            name: value.nama,
            keterangan: value.keterangan
          });
        }else {
          this._router.navigate(['/', 'perpustakaan', 'master', 'kategori', 'buku']);
        }
      }, errors =>{
        console.error('data error');
      })
    })
  }

}
