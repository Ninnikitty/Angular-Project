import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item  = '';
  list = [];
  constructor() {}

  addItem(){
    this.list.push(this.item);
  }
  removeItem(addedItem){
    this.list = _.without(this.list, addedItem);
  }

  ngOnInit() {}
}
