import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-input',
  templateUrl: './toggle-input.component.html',
  styleUrls: ['./toggle-input.component.scss']
})
export class ToggleInputComponent implements OnInit {

  isChecked = false;

  constructor() { }

  ngOnInit(): void {
  }

  addVisability() {
    if (this.isChecked) {
      return {
        'display': true
      };
    } else {
      return {'display': false}
    }
  }

  toggler() {
    this.isChecked = !this.isChecked;
  }
}
