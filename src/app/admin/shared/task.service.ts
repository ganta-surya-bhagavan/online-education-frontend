import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Attendance } from '../attendance';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }
  TaskForm = new FormGroup({
    studentId: new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]{5}")]),
    task: new FormControl('',[Validators.required]),
    
    
  });
  initializeFormGroup() {
    this.TaskForm.setValue({
      studentId:' ',
      task:' '
    });
  }
  populateForm(Task){
    this.TaskForm.setValue({
      studentId:Task.studentId,
      task:Task.task
    });
  }

  url:string="http://localhost:8083/addAttendance";
  getAttendanceList()
  {
    return this.httpClient.get<Attendance[]>("http://localhost:3000/attendance");
  }
  postTask(data:Task)
  {
    console.log(data);
    var httpOtions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.httpClient.post<any>(this.url,data,httpOtions);
  }
  deleteTask(id:number){
    var httpOtions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.httpClient.delete<any>("http://localhost:8083/deleteAttendance"+id,httpOtions);
  }
  updateTask(data:Task){
    var httpOtions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.httpClient.put<any>("http://localhost:8083/updateAttendance",data,httpOtions);
  }
  sendEmail(data){
    return this.httpClient.post<any>("http://localhost:8081/sendEmail",data);
  }
  sendSms(data){
    return this.httpClient.post<any>("",data);
  }
}
