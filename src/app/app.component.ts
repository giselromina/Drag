import { Component, OnInit } from '@angular/core';
import { DataMockService } from './data-mock.service';
import { MockData } from './mock-data';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Drag & Drop';
  completed;
  todos: MockData[];
  maquina: MockData[];
  totalItems: number;
  constructor(private _mockService: DataMockService) {}
  ngOnInit() {

    this.todos = this._mockService
      .getDataListTodo();
    this.maquina =  this._mockService
    .getDataListTodo();
    this.completed = this._mockService
      .getDataListComplete();
  }
addMachine() {
  let nroMachine: number;
  nroMachine = nroMachine++;
  const newMachine = {
   templateReference: `#${nroMachine}`,

 };
}
  drop(event: CdkDragDrop<string[]>) {
this.completed = this._mockService
    .getDataListComplete();
if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.totalItems = event.container.data.length;
    }

  }
}
