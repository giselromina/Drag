import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-preview',
  templateUrl: './drag-preview.component.html',
  styleUrls: ['./drag-preview.component.scss']
})
export class DragPreviewComponent implements OnInit {
  @Input() dataShow;
  constructor() { }

  ngOnInit() {
  }

}
