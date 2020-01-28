import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item = '';
  list = [];
  allIP = 'http://localhost:8080/api/foods/all';
  newIP = 'http://localhost:8080/api/foods/new';
  delIP = 'http://localhost:8080/api/foods/delete';
  dummyIP = 'http://api.github.com/users/Spop22';

  constructor(private http: HttpClient) {
    //Keep the data from API fresh
    setInterval( () => {
      let data = this.http.get(this.allIP);
      data.subscribe((response) => this.refreshPage(response) );
    } , 5000); //Tick once per 2 second
  }

  addItem(item){
    this.list.push(item);
    console.log("Added item: " + this.item);
    //let pushee = {'food': ['nakki', 'makkara']};
    //this.http.post(this.newIP, pushee)
  }
  removeItem(){
    this.list.pop();
  }

  ngOnInit() {}

  refreshPage(d){
    console.log("Got response: " + d + " from: " + this.allIP);
    console.log(d["data"][0].item);
    d["data"].forEach(element => {
      this.list[element.id]=element.item;
    });
    console.log(this.list);
    //this.list.forEach(element => {
    //  console.log("Client list: " + element);
    //});
  }
}
