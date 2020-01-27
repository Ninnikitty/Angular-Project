import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aika',
  templateUrl: './aika.component.html',
  styleUrls: ['./aika.component.css']
})
export class AikaComponent implements OnInit {

  aikaViesti: string;

  constructor() { 
    setInterval( () => {
      let currentDate = new Date();
      this.aikaViesti = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);
  }

  ngOnInit() {
  }

}
