import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-board-content',
  templateUrl: './dash-board-content.component.html',
  styleUrls: ['./dash-board-content.component.scss']
})
export class DashBoardContentComponent implements OnInit {
  @Input() content : string;
  constructor() { }
  toggleDisplay =true;
  toggleInput = false;
toggleCheckBox= false;
  ngOnInit(): void {
  }

  toggle(){
    this.toggleDisplay = !this.toggleDisplay;
  }
  tam:string
  okClick(){
    this.content=this.tam;
  }

  delClick(){
    if(confirm("Do you want to delete this task"))
    this.content=null;
    else
    this.content=this.content;
  }
  classA="add-box box1";
  classB="add-box box1 done"

  doneClick(){
    this.classA=this.classB;
  }

}

