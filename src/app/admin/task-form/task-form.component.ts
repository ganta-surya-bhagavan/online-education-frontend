import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../shared/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  constructor(public service:TaskService) { }

  ngOnInit(): void {
     
}
  submitted(){
    console.log(this.service.TaskForm.value);
    let task = new Task();
    task.studentId = Number(this.service.TaskForm.value.studentId);
    task.task=this.service.TaskForm.value.task;
    console.log(task);
    this.service.postTask(task).subscribe(
      data=>{
        console.log(data);
      }
    );
    this.service.TaskForm.reset();
    this.service.initializeFormGroup();
    //this.notificationService.success(':: Submitted successfully');
    //this.onClose();
  }
 /* onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value)
        this.service.insertEmployee(this.service.form.value);
      else
      this.service.updateEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }*/

 /* onClose() {
    this.service.TaskForm.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }*/

}
