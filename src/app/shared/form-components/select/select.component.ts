import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewChecked {
  cars: any;
  classOpen: any;
  classBG: any;
  isOpened = false;
  constructor(
    private travelService: TravelService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cars = this.travelService.cars;
    console.log(this.cars)
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
}
