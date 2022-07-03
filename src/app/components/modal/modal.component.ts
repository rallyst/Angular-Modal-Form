import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) data: { message: string }) { 
      this.data = data;
      this.form = this.fb.group({
        investedAmount: ['', Validators.required],  
      });
    }

  ngOnInit(): void {}

  submit(form: NgForm) {
    console.log('Sub: ',form.value)
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
