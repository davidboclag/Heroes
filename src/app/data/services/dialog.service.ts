import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { ConfirmDialog } from '../models/confirm-dialog';
import { InfoDialog } from '../models/info-dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  infoDialog(data: InfoDialog) {
    return this.dialog
      .open(DialogConfirmComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }

  confirmDialog(data: ConfirmDialog) {
    return this.dialog
      .open(DialogConfirmComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}
