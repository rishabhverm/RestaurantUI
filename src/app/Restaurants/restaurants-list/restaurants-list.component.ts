import { Component } from '@angular/core';
import { Restaurant } from '../Models/restaurants.model';
import { RestaurantService } from '../Services/restaurant.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent {
  restaurant: Restaurant[] = [];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getAllRestaurant()
      .subscribe({
        next: (restaurant) => {
          this.restaurant = restaurant;

        },
        error: (response) => {
          console.log(response)
        }
      });


  }
}
