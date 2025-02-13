import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';

@NgModule({
  declarations : [
    AppComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule // ✅ Se mantiene aquí para los servicios HTTP
  ],

  providers : [],

  bootstrap : [AppComponent]
})
export class PagesModule { }
