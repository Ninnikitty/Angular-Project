import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any;
  constructor() {
    this.list ={
      item: [
        'uwu',
        'owo',
        'ono'
      ]
    };
   }
   
   onClickMeItem(){
    
  }

   removeItem(item){
    let index = this.list.indexOf(item);
    this.list.splice(index,1);
}
  ngOnInit() {
  }

}
