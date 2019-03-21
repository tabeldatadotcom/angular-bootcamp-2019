import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PembelianComponent } from './transaksi/pembelian/pembelian.component';
import { CellComponent } from './list/cell/cell.component';
import { CompAComponent } from './sample-service/comp-a/comp-a.component';
import { CompBComponent } from './sample-service/comp-b/comp-b.component';
import { DataMahasiswaService } from './sample-service/data-mahasiswa.service';
import { SampleServiceComponent } from './sample-service/sample-service.component';
import { KategoriBukuComponent } from './perpustakaan/master/kategori-buku/kategori-buku.component';
import { KategoriBukuService } from './perpustakaan/master/kategori-buku/kategori-buku.service';
import { NewKategoriBukuComponent } from './perpustakaan/master/kategori-buku/new-kategori-buku/new-kategori-buku.component';
import { DetailKategoriBukuComponent } from './perpustakaan/master/kategori-buku/detail-kategori-buku/detail-kategori-buku.component';

const appRoutes: Routes = [
  {
    path: 'form',
    component: FormReactiveComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'sample-service',
    component: SampleServiceComponent
  },
  {
    path: 'perpustakaan/master/kategori/buku',
    component: KategoriBukuComponent
  },
  {
    path: 'perpustakaan/master/kategori/buku/detail/:kode',
    component: DetailKategoriBukuComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormReactiveComponent,
    PembelianComponent,
    CellComponent,
    CompAComponent,
    CompBComponent,
    SampleServiceComponent,
    KategoriBukuComponent,
    NewKategoriBukuComponent,
    DetailKategoriBukuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {}),
    HttpClientModule
  ],
  providers: [DataMahasiswaService, KategoriBukuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
