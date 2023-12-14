import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ask-expert',
  templateUrl: './ask-expert.component.html',
  styleUrls: ['./ask-expert.component.css']
})
export class AskExpertComponent {

  askExpertForm!: FormGroup  ;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.askExpertForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      product: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', Validators.required],
      recaptcha: [null, Validators.required], 

    });
  }

  onSubmit() {
    if (this.askExpertForm.valid) {
      console.log('Form submitted:', this.askExpertForm.value);
    } else {
      this.markFormGroupTouched(this.askExpertForm);
    }
  }

  onReset() {
    this.askExpertForm.reset();
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

