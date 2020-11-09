import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../shared/loader.service';
import { NotifyService } from '../../shared/notify.service';
import { TaskService } from '../../shared/task.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  NotificationForm: FormGroup;
  formVisibility: Boolean;
  subject:string;
  constructor(private service:TaskService,public loaderService:LoaderService,private notification:NotifyService) { }
  SmsEntity={
    studentId:Number,
    message:String
  }
  MailEntity={
    studentId:Number,
    message:String,
    subjectOfMail:String
  }
  ngOnInit(): void {
    this.NotificationForm = new FormGroup({
      studentId: new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]{5}")]),
      subjectOfMail: new FormControl(''),
      mailOrSms: new FormControl('1'),
      message: new FormControl('',[Validators.required]),
      
      
    });

      
  }
  submitted(){
    //console.log(this.NotificationForm.value);
    if(this.NotificationForm.controls['mailOrSms'].value==1){
      this.SmsEntity.message=this.NotificationForm.controls['message'].value;
      this.SmsEntity.studentId=this.NotificationForm.controls['studentId'].value;
      console.log(this.SmsEntity);
      this.service.sendSms(this.SmsEntity).subscribe();
    }
    else{
      console.log(this.subject);
      var mail = new String("suryabhagavan48048@gmail.com");
      this.MailEntity.message = this.NotificationForm.controls['message'].value;
      this.MailEntity.studentId= this.NotificationForm.controls['studentId'].value;
      this.MailEntity.subjectOfMail = this.NotificationForm.controls['subjectOfMail'].value;
      console.log(this.MailEntity);
      this.service.sendEmail(this.MailEntity).subscribe(
        data=>{
          console.log(data);
          this.notification.success(":: done");
        }
      );
    }
  }

}
