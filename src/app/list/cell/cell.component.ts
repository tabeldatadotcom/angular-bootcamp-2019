import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Model } from '../list.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() dataPribadi: Model;
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handle(){
    this.clicked.emit(this.dataPribadi._nama);
  }

}
