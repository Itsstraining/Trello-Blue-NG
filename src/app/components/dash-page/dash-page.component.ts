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
  public dashDB :Array<DashBox> =[]
  constructor(public dboardService : DashBoardServicesService) { 
    this.dashDB = this.dboardService.dashBoxDB;
  }
  ngOnInit(): void {
  }
  newBox(){
    this.dboardService.dashBoxDB.push({
      boxName:this.dboxName,
      dashBox:[],
    });
    console.log(this.dboardService.dashBoxDB);
  }


}
