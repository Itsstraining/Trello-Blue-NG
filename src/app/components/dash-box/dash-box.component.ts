import { Component, OnInit } from '@angular/core';
import { DashBoardServicesService } from 'src/app/services/dash-board-services.service';
import {DashListItem, DashBox} from '../../models/dash-item.model'
@Component({
  selector: 'app-dash-box',
  templateUrl: './dash-box.component.html',
  styleUrls: ['./dash-box.component.scss']
})
export class DashBoxComponent implements OnInit {
  boxname ='';
  public dbtam : Array<DashListItem> = [];
  public dashDB :Array<DashBox> =[]
  constructor(public dboardService : DashBoardServicesService) { 
    this.dbtam = this.dboardService.db;
    this.dashDB = this.dboardService.dashBoxDB;
  }

  ngOnInit(): void {
  }
  newBox(){
    this.dboardService.dashBoxDB.push({
      boxName:this.boxname,
      dashBox:this.dbtam,
    });
    console.log(this.dboardService.dashBoxDB);
  }
}
