import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { KategoriBukuService } from '../kategori-buku.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KategoriBuku } from '../kategory-buku.model';

@Component({
  selector: 'app-new-kategori-buku',
  templateUrl: './new-kategori-buku.component.html',
  styleUrls: ['./new-kategori-buku.component.css']
})
export class NewKategoriBukuComponent implements OnInit {

  formGroup: FormGroup;
  @Output() submited = new EventEmitter<string>();

  constructor(
    private _kategoriBukuService: KategoriBukuService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: this._formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      nama: this._formBuilder.control('', [Validators.required]),
      keterangan: this._formBuilder.control('')
    });
  }

  send(event: any){
    const data: KategoriBuku = this.formGroup.value;
    this._kategoriBukuService.save(data).subscribe(response =>{
      if(response.status == 200){
        alert('Data berhasil di simpan');
        this.submited.emit('berhasil');
      }
    }, errors => {
      console.error(errors);
    })
  }

}
