import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item = '';
  list = [];
  constructor() {}

  addItem(item){
    this.list.push(item);
  }
  removeItem(){
    this.list.pop();
  }

  ngOnInit() {}
}
