import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/models/car';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  data!: any;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    private travelService: TravelService,
    @Inject(MAT_DIALOG_DATA) data: { message: string }) { 
      this.data = data;
      this.form = this.fb.group({
        investedAmount: ['', Validators.required],  
      });
    }

  ngOnInit(): void {}

  carMake: string = 'Make';
  carModel: string = 'Model';

  getDataFromSelect(value: any){
    this.carMake = value.make;
    this.carModel = value.model;
  }

  submit(form: NgForm) {
    this.dialogRef.close({
      form: form
    });
  }
  
  close() {
    this.dialogRef.close(false)
  }

  test() {
    console.log('TEST')
  }


  toggle(area: string) {
    console.log('toggle: ', area)
  }
}
