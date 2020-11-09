import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Attendance } from '../attendance';
import { DialogServiceService } from '../shared/dialog-service.service';
import { TaskService } from '../shared/task.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {
  attendance:Attendance[];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  displayedColumns: string[] = ['task','attendanceId','studentId','date','time','actions'];
  constructor(private service:TaskService,private dialog:MatDialog,private dialogService:DialogServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(){
    console.log(this.attendance);
    this.service.getAttendanceList().subscribe(
  
      array=>
      {
              this.listData = new MatTableDataSource(array);
              this.listData.sort = this.sort;
              this.listData.paginator = this.paginator;
              // this.listData.filterPredicate = (data, filter) => {
              //   return this.displayedColumns.some(ele => {
              //     return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
              //   });
              // };
              
            });
    
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    //this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(TaskFormComponent,dialogConfig);
  }

  onEdit(row){
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(TaskFormComponent,dialogConfig);
  }

  onDelete(key){
    console.log(key);
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteTask(key);
        //this.notificationService.warn('! Deleted successfully');
      }
    });
    /*if(confirm('Are you sure to delete this record ?')){
    this.service.deleteEmployee($key);
    this.notificationService.warn('! Deleted successfully');
    }*/
  }
  

}
