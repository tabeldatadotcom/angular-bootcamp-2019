import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

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
        id: this.formBuilder.control('')
      }),
      items: this.formBuilder.array([])
    });
  }

  addItems(){
    let item = this.formBuilder.group({
      item : this.formBuilder.group({
        id: this.formBuilder.control('')
      }),
      qty: this.formBuilder.control(0),
      price: this.formBuilder.control(0)
    })
    this.items.push(item);
  }

  get items(): FormArray{
    return this.formGroup.get('items') as FormArray;
  }

  submited(){
    console.log(this.formGroup.value);
  }

}
