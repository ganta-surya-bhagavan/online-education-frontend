import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { NotificationComponent } from './admin/notification/notification/notification.component';
import { ShowTasksComponent } from './admin/show-tasks/show-tasks.component';
import { TaskFormComponent } from './admin/task-form/task-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './admin/shared/interceptor.service';
import { TaskService } from './admin/shared/task.service';
import { LoaderService } from './admin/shared/loader.service';
import { ConfirmDialogComponent } from './admin/confirm-dialog/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,NotificationComponent,ShowTasksComponent,TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },TaskService,LoaderService],
  entryComponents:[TaskFormComponent,ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
