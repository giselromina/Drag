
import { Component, OnInit, Input } from '@angular/core';
import {
  moveItemInArray,
  CdkDragDrop,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CenterComponentService } from './data-mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class DragListComponent implements OnInit {
 projectTitle;
  title = '';
  completed;
  todos ;
  maquina;
  totalItems: number;
  showList = false;
   timer;
   color: string;
   colorBack = 'white';
   dataList;
   listConnectedTo;
   numberMachine;
   machineFromService;
  constructor(private centerComponentService: CenterComponentService) {}

  ngOnInit(): void {
    this.setData();
    this.title = 'Operators';
  }
  setData() {
    setInterval(() => this.colorTime(), 5000);
    this.dataList = this.centerComponentService.getDataListMock();
    this.maquina = this.centerComponentService.getDataListMock();
    this.machineFromService = this.centerComponentService.getdataMachine();
    this.setMachineToList();

  }
setMachineToList() {
  this.listConnectedTo = this.machineFromService.map(machine => machine.id);
}
  drop(event: CdkDragDrop<string[]>) {
    this.dataList = this.centerComponentService.getDataListMock();

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.projectTitle = this.dataList[event.previousIndex];
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }
  showListOperator() {
    if (this.showList) {
      this.showList = false;
    } else {
      this.showList = true;
    }
  }
  colorTime() {
    this.timer = (Math.random() * 40).toFixed(2);
    (this.timer > 20) ? this.color = 'green' : this.color = 'violet';
  }

  setColor() {
    this.colorBack = 'pink';
  }
  getOutcolor() {
    this.colorBack = 'White';
  }

}
