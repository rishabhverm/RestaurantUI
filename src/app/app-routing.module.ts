import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './Restaurants/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './Restaurants/edit-restaurant/edit-restaurant.component';
import { RestaurantsListComponent } from './Restaurants/restaurants-list/restaurants-list.component';
import { ViewSpecificDetailsComponent } from './Restaurants/view-specific-details/view-specific-details.component';
import { WelcomeComponent } from './Restaurants/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'restaurant', component: RestaurantsListComponent },
  { path: 'restaurant/add', component: AddRestaurantComponent },
  { path: 'restaurant/edit/:id', component: EditRestaurantComponent },
  { path: 'restaurant/view/:id', component: ViewSpecificDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
