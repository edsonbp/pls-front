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
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-dialog-confirm',
  imports: [MatInputModule, MatButtonModule, MatDialogModule
  ],
  templateUrl: './dialog-confirm.html',
  styleUrl: './dialog-confirm.css',
})
export class DialogConfirm {
  readonly dialogRef = inject(MatDialogRef<DialogConfirm>);
  
  close(confirm:boolean){
    this.dialogRef.close(confirm)
  }
}
