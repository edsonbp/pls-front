import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-dialog-ask-folder',
  imports: [MatInputModule, MatButtonModule, MatDialogModule, MatFormFieldModule,
            MatIconModule
  ],
  templateUrl: './dialog-ask-folder.html',
  styleUrl: './dialog-ask-folder.css',
})
export class DialogAskFolder {
  readonly dialogRef = inject(MatDialogRef<DialogAskFolder>);
  
  close(confirm:boolean){
    this.dialogRef.close(confirm)
  }
  folderSelectEvent(event: any){
    const file: FileList = event.target.files;
    console.log(file)

  }
}
