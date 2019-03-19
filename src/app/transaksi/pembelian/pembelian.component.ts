import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css']
})
export class PembelianComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        id: this.formBuilder.control('', [Validators.required])
      }),
      items: this.formBuilder.array([], [Validators.required])
    });
  }

  addItems() {
    let item = this.formBuilder.group({
      item: this.formBuilder.group({
        id: this.formBuilder.control('', [
          Validators.required
        ])
      }),
      qty: this.formBuilder.control(0, [
        Validators.required,
        Validators.min(1)
      ]),
      price: this.formBuilder.control(0, [
        Validators.required,
        Validators.min(0)
      ])
    })
    this.items.push(item);
  }

  get items(): FormArray {
    return this.formGroup.get('items') as FormArray;
  }

  submited() {
    console.log(this.formGroup);
  }

}
