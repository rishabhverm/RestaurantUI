import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from '../Models/restaurants.model';
import { RestaurantService } from '../Services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent {
  addRestaurantRequest: Restaurant = {
    id: '',
    restaurantName: '',
    contactName: '',
    pinCode: 0,
    location: '',
    website: '',
    phonenumber: 0,
    averageDailyTrasaction: 0

  };
  formData!: FormGroup

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      "restaurantName": new FormControl('', [Validators.required]),
      "contactName": new FormControl('', [Validators.required]),
      "pinCode": new FormControl('', [Validators.required]),
      "location": new FormControl('', [Validators.required]),
      "website": new FormControl('', [Validators.required]),
      "phonenumber": new FormControl('', [Validators.required]),
      "averageDailyTrasaction": new FormControl('', [Validators.required]),

    })
  }
  addRestaurant(formData: Restaurant) {
    this.restaurantService.AddRestaurant(formData)
      .subscribe({
        next: (restaurant) => {
          console.log("add restaurant", restaurant)
          this.router.navigate(['restaurant'])
          alert("Merchant Added")
        }
      })
  }
}
