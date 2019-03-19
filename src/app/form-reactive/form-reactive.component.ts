import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      'id': this.formBuilder.control(''),
      'nama': this.formBuilder.control(''),
      'alamat': this.formBuilder.group({
        'kota': this.formBuilder.control(''),
        'rt': this.formBuilder.control(''),
        'rw': this.formBuilder.control(''),
        'jalan': this.formBuilder.control('')
      }),
      'hobi': this.formBuilder.array([])
    });
  }

  addHobi() {
    let group = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nama: this.formBuilder.control('')
    })
    this.hobi.push(group);
  }

  removeHoby(index: number) {
    this.hobi.removeAt(index);
  }

  get hobi(): FormArray {
    return this.formGroup.get('hobi') as FormArray;
  }

  handler(event: any) {
    console.log(this.formGroup.value);
  }

}
