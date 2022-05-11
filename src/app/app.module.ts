import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// To install FileUploadModule run the following command in
// the root directory of the angular project:
// npm install ng2-file-upload --save
// For more infos: https://valor-software.com/ng2-file-upload/
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FileUploadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
