import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from 'src/app/data/models/heroe';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent {
  title: string = '';
  message: string = '';
  cancelButton: string = '';
  confirmButton: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title;
    this.message = data.message;
    this.cancelButton = data.cancelButton;
    this.confirmButton = data.confirmButton;
  }
}
