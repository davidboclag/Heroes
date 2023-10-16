import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from 'src/app/data/models/heroe';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-heroe',
  templateUrl: './form-heroe.component.html',
  styleUrls: ['./form-heroe.component.scss']
})
export class FormHeroeComponent implements OnInit {

  public myForm!: FormGroup;
  titleDialog: string;

  constructor(
    public dialogRef: MatDialogRef<FormHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe,
  ) {
    this.titleDialog = (data.name !== '') ? 'Modificar héroe ' + data.name : 'Agregar nuevo héroe';
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onOkClick(): void {
    this.dialogRef.close(this.myForm.value);
  }
}
