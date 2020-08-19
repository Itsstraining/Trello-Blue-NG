import { Component, OnInit } from '@angular/core';
import { DashBoardServicesService } from 'src/app/services/dash-board-services.service';
import {DashListItem, DashBox} from '../../models/dash-item.model'


@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.scss']
})
export class DashPageComponent implements OnInit {
  dboxName = '';
  toggleIpt =true;
  public dashDB :Array<DashBox> =[]
  constructor(public dboardService : DashBoardServicesService) { 
    this.dashDB = this.dboardService.dashBoxDB;
  }
  ngOnInit(): void {
  }
  newBox(){
    if (this.dboxName=='')
      alert("Please enter your task name.")
    else{  
      this.toggle();
      this.dboardService.dashBoxDB.push({
      boxName:this.dboxName,
      dashBox:[],
    });
  }
    this.dboxName='';
  }

  toggle(){
    this.toggleIpt= !this.toggleIpt
  }


}
