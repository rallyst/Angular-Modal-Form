import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ToggleInputComponent } from './form-components/toggle-input/toggle-input.component';
import { SelectComponent } from './form-components/select/select.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ToggleInputComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ToggleInputComponent,
    SelectComponent
  ]
})
export class SharedModule { }
