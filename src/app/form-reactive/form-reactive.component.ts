import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      'id': new FormControl(),
      'nama': new FormControl(),
      'alamat': new FormGroup({
        'kota': new FormControl(),
        'rt': new FormControl(),
        'rw': new FormControl(),
        'jalan': new FormControl()
      })
    });
  }

  handler(event: any){
    console.log(this.formGroup.value);
  }

}
