import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './Restaurants/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './Restaurants/edit-restaurant/edit-restaurant.component';
import { RestaurantsListComponent } from './Restaurants/restaurants-list/restaurants-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WelcomeComponent } from './Restaurants/welcome/welcome.component';
import { ViewSpecificDetailsComponent } from './Restaurants/view-specific-details/view-specific-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    RestaurantsListComponent,
    WelcomeComponent,
    ViewSpecificDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
