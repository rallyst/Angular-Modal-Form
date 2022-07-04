import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class TravelService implements OnInit{

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
      id: '0',
      make: 'BMW',
      model: 'X3',
      registration: 'AT 1505 BM',
      imgPath: '../../assets/cars/photo.png'
    },
    {
      id: '1',
      make: 'Toyota',
      model: 'Prius',
      registration: 'KA 1234 KA',
      imgPath: null
    }
  ]


  selectedCar: any;

  

  constructor() { }

  ngOnInit(): void {

  }
}
