import { Component, Input } from '@angular/core';
import { Food } from '../food';
import { ContactService } from '../food.service';

@Component({
  selector: 'food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})

export class FoodDetailsComponent {
  @Input()
  contact: Food;
  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private contactService: ContactService) {}

  createFood(food: Food) {
    this.contactService.createFood(food).then((newFood: Food) => {
      this.createHandler(newFood);
    });
  }

  updateFood(food: Food): void {
    this.contactService.updateFood(food).then((updatedFood: Food) => {
      this.updateHandler(updatedFood);
    });
  }

  deleteFood(foodId: String): void {
    this.contactService.deleteFood(foodId).then((deletedFoodId: String) => {
      this.deleteHandler(deletedFoodId);
    });
  }
}
