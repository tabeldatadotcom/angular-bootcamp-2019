import { Component } from "@angular/core";
import { Model as Data } from "./list.model"
import { ValueTransformer } from "@angular/compiler/src/util";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    constructor(){
        let value = new Data();
        value._nama = "Dimas Maryanto";
        value.active = false;
        value.alamat = "jljl";
        value.umur = 18;
        this.list.push(value);

        value = new Data();
        value._nama = "Muhamad yusuf";
        value.active = false;
        value.alamat = "jljl";
        value.umur = 18;
        this.list.push(value);
    }

    list: Array<Data> = [];
}