import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';
import { UppercaseDirective } from '../data/directives/uppercase.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorService } from '../data/services/interceptor.service';
import { MatCardModule } from '@angular/material/card';

const ELEMS = [
  CommonModule,
  HttpClientModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  A11yModule,
  MatProgressSpinnerModule,
  MatCardModule
];

@NgModule({
  declarations: [UppercaseDirective],
  imports: [ELEMS],
  exports: [
    ELEMS,
    UppercaseDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
})
export class SharedModule { }
