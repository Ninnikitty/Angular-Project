import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { ContactService } from '../food.service';
import { FoodDetailsComponent } from '../food-details/food-details.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  providers: [ContactService]
})

export class FoodListComponent implements OnInit {

  foods: Food[];
  selectedFood: Food;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contactService
      .getFoods()
      .then((foods: Food[]) => { return foods; });
  }

  private getIndexOfFood = (foodId: string) => {
    return this.foods.findIndex((food) => {
      return food.getId() === foodId;
    });
  }

  selectFood(food: Food) {
    this.selectedFood = food;
  }

  createNewFood() {
    const food: Food = new Food();
    food.setName('');
    this.selectFood(food); // By default, a newly-created food will have the selected state.
  }

  deleteFood = (foodId: string) => {
    const idx = this.getIndexOfFood(foodId);
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
    const idx = this.getIndexOfFood(food.getId());
    if (idx !== -1) {
      this.foods[idx] = food;
      this.selectFood(food);
    }
    return this.foods;
  }
}
