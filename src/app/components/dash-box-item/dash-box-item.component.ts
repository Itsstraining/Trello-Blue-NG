import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashBoardServicesService } from 'src/app/services/dash-board-services.service';
import{DashListItem} from '../../models/dash-item.model';
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
    this.display2 = !this.display2;
  }
  @Output() onAddEvent = new EventEmitter<string>();
  outputContent(n:string){
    this.toggle();
    this.onAddEvent.emit(n);
  }

  clearVaulue(){
    this.toggle();
    this.txtBox='';
  }
}
