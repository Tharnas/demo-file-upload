import { Component } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public uploader: FileUploader;

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public image: string = '';

  public constructor() {
    this.uploader = new FileUploader({
      disableMultipart: true,
    });

    // store this in a varialbe to be able to access it later in the onload method
    const myThis = this;
    this.uploader.onAfterAddingFile = function (item: FileItem) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (reader.result === null) {
          return;
        }

        myThis.image = `data:image/jpg;base64,${
          (<string>reader.result).split(',')[1]
        }`;
      };
      reader.readAsDataURL(item._file);
    };
  }
}
