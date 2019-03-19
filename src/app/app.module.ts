import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CollectionComponent } from './list/collection/collection.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CollectionComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
