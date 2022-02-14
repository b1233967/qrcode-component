import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QrcodeBoxComponent } from './components/qrcode-box/qrcode-box.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
