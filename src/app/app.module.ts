import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PembelianComponent } from './transaksi/pembelian/pembelian.component';
import { CellComponent } from './list/cell/cell.component';
import { CompAComponent } from './sample-service/comp-a/comp-a.component';
import { CompBComponent } from './sample-service/comp-b/comp-b.component';
import { DataMahasiswaService } from './sample-service/data-mahasiswa.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormReactiveComponent,
    PembelianComponent,
    CellComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DataMahasiswaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
