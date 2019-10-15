import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodDetailsComponent } from './foods/food-details/food-details.component';
import { FoodListComponent } from './foods/food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDetailsComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
