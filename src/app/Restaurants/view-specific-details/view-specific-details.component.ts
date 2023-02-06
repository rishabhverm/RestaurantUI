import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Restaurant } from '../Models/restaurants.model';
import { RestaurantService } from '../Services/restaurant.service';

@Component({
  selector: 'app-view-specific-details',
  templateUrl: './view-specific-details.component.html',
  styleUrls: ['./view-specific-details.component.scss']
})
export class ViewSpecificDetailsComponent {
  restaurant!: Restaurant;
  constructor(private restaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.restaurantService.getById(id)
            .subscribe({
              next: (reponse) => {
                this.restaurant = reponse;
                console.log("restaurantinfo", reponse)
              }
            })
        }
      }

    })
  }
  deleteRestaurant(id: any) {
    this.restaurantService.deleteRestaurant(id)
      .subscribe({
        next: (x) => {
          console.log("delete", x)
          this.router.navigate(['restaurant'])
          alert("Delete Successful")
        }
      })
  }
}
