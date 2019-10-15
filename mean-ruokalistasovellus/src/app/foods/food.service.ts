import { Injectable } from '@angular/core';
import { Food } from './food';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
}

export class ContactService {
  private foodsUrl = '/api/foods';

constructor(private http: HttpClient) {}

  // get("/api/foods")
  getFoods(): Promise<void | Food[]> {
    return this.http.get(this.foodsUrl)
               .toPromise()
               .then(response => response as Food[])
               .catch(this.handleError);
  }

  // post("/api/foods")
  createFood(newFood: Food): Promise<void | Food> {
    return this.http.post(this.foodsUrl, newFood)
               .toPromise()
               .then(response => response as Food)
               .catch(this.handleError);
  }

  // get("/api/foods/:id") endpoint not used by Angular app

  // delete("/api/foods/:id")
  deleteFood(delFoodId: string): Promise<void | string> {
    return this.http.delete(this.foodsUrl + '/' + delFoodId)
               .toPromise()
               .then(response => response as string)
               .catch(this.handleError);
  }

  // put("/api/foods/:id")
  updateFood(putFood: Food): Promise<void | Food> {
    const putUrl = this.foodsUrl + '/' + putFood.getId();
    return this.http.put(putUrl, putFood)
               .toPromise()
               .then(response => response as Food)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}