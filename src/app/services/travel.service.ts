import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  locations = [
    'Lviv',
    'Kyiv',
    'Dnipro',
    'Odesa',
    'Kharkiv',
    'Vinnytsya',
    'Ternopil'
  ]

  cars = [
    {
      make: 'BMW',
      model: 'X3',
      registration: 'AT 1505 BM',
      img: '../../assets/cars/photo.png'
    },
    {
      make: 'Toyota',
      model: 'Prius',
      registration: 'KA 1234 KA',
      img: null
    }
  ]

  constructor() { }
}
