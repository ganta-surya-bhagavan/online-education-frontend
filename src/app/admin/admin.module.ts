import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog/confirm-dialog.component';
import { NotificationComponent } from './notification/notification/notification.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    
    
    
  ],
  imports: [
  
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
   MatInputModule,
  MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
   MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  exports:[
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
   MatInputModule,
  MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
   MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
     MatTableModule,
    MatSortModule,
     MatDialogModule,
     FormsModule,
     BrowserAnimationsModule,
     MatProgressBarModule,
    MatProgressSpinnerModule
     
  ]
})
export class AdminModule { }
