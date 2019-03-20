import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PembelianComponent } from './transaksi/pembelian/pembelian.component';
import { CellComponent } from './list/cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormReactiveComponent,
    PembelianComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
