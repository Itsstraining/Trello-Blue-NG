import { Component, OnInit } from '@angular/core';
import { DashBoardServicesService } from 'src/app/services/dash-board-services.service';

@Component({
  selector: 'app-dash-box-item',
  templateUrl: './dash-box-item.component.html',
  styleUrls: ['./dash-box-item.component.scss']
})
export class DashBoxItemComponent implements OnInit {
  txtBox:string ='';
  constructor(public dboardServiec :DashBoardServicesService) {}
  display1:Boolean = true;
  display2:Boolean = false;

  ngOnInit(): void {
  }

  toggle(){
    this.display1 = !this.display1;
    this.display2 = !this.display1;
  }

  outputContent(){
    this.toggle();
    this.dboardServiec.db.push({noidung:this.txtBox})
  }

  clearVaulue(){
    this.toggle();
    this.txtBox='';
  }
}
