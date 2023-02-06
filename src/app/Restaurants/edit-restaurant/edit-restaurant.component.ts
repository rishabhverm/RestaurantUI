import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../Models/restaurants.model';
import { RestaurantService } from '../Services/restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss']
})
export class EditRestaurantComponent {
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

  constructor(private restaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.restaurantService.getById(id)
            .subscribe({
              next: (reponse) => {
                this.addRestaurantRequest = reponse;
                console.log("restaurantinfo", reponse)
              }
            })
        }
      }

    })

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
  UpdateRestaurant() {
    this.restaurantService.UpdateRestaurant(this.addRestaurantRequest.id, this.addRestaurantRequest)
      .subscribe({
        next: (response) =>
          this.router.navigate(['restaurants-list'])
      })
  }
}
