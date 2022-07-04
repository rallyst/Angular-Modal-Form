import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/models/car';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewChecked {
  cars!: Car[];
  classOpen: any;
  classBG: any;
  isOpened = false;
  carRegistration = 'Registration';

  @Output() carSelected: EventEmitter<Car> = new EventEmitter<Car>();

  constructor(
    private travelService: TravelService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cars = this.travelService.cars;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  addClass() {
    if (this.isOpened) {
      this.classOpen = {'open': true,}
      this.classBG = {'background': true}
      return {
        'select': false
      };
    } else {
      this.classOpen = {'open': false,}
      this.classBG = {'background': false}
      return {'open': false}
    }
  }

  select() {
    this.isOpened =!this.isOpened
    console.log('click')
  }

  selectCard(index: number) {
    this.carRegistration = this.cars[index].registration;
    this.carSelected.emit(this.cars[index]);
  }
}
