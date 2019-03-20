import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../list.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() dataPribadi: Model;

  constructor() { }

  ngOnInit() {
  }

}
