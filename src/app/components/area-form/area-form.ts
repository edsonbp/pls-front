import {ChangeDetectionStrategy, Component, inject, model} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirm } from '../dialog-confirm/dialog-confirm';


/** @title Simple form field */
@Component({
  selector: 'area-form',
  templateUrl: 'area-form.html',
  styleUrl: 'area-form.css',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule,
            MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaForm {
  readonly dialog = inject(MatDialog);

  constructor(private router: Router){

  }

  toRoute(route: string){
    let confirm = this.dialog.open(DialogConfirm)
    confirm.afterClosed().subscribe(result=>{
      if(result){
        this.router.navigateByUrl(route)
      }
    })
    // this.router.navigateByUrl(route)
  }
  confirm(){
    console.log('gravando...')
  }

}