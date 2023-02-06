import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Restaurant } from '../Models/restaurants.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  baseApiUrl: String = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseApiUrl + '/restaurant');
  }
  getById(id: any): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseApiUrl + '/restaurant/' + id)
  }
  AddRestaurant(addRestaurantRequest: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.baseApiUrl + '/restaurant', addRestaurantRequest)
  }
  deleteRestaurant(id: any): Observable<Restaurant[]> {
    return this.http.delete<Restaurant[]>(this.baseApiUrl + '/restaurant/' + id)
  }
  UpdateRestaurant(id: any, UpdateRestaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(this.baseApiUrl + '/restaurant/' + id, UpdateRestaurant)
  }
}