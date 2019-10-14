import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { ContactService } from '../food.service';
import { FoodDetailsComponent } from '../food-details/food-details.component';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers: [ContactService]
})

export class FoodListComponent implements OnInit {

  foods: Food[]
  selectedFood: Food

  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contactService
      .getFoods()
      .then((foods: Food[]) => {return foods;});
  }

  private getIndexOfFood = (foodId: String) => {
    return this.foods.findIndex((food) => {
      return food._id === foodId;
    });
  }

  selectFood(food: Food) {
    this.selectedFood = food
  }

  createNewFood() {
    var food: Food = {
      name: ''
    };
    this.selectFood(food); // By default, a newly-created food will have the selected state.
  }

  deleteFood = (foodId: String) => {
    var idx = this.getIndexOfFood(foodId);
    if (idx !== -1) {
      this.foods.splice(idx, 1);
      this.selectFood(null);
    }
    return this.foods;
  }

  addFood = (food: Food) => {
    this.foods.push(food);
    this.selectFood(food);
    return this.foods;
  }

  updateFood = (food: Food) => {
    var idx = this.getIndexOfFood(food._id);
    if (idx !== -1) {
      this.foods[idx] = food;
      this.selectFood(food);
    }
    return this.foods;
  }
}
