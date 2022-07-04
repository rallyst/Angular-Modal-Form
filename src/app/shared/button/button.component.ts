import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {

  @Input() disabled = false;
  @Input() type = 'button';

  @Input() bg = '#1E3356';

  @Input() color = '#fff'

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
