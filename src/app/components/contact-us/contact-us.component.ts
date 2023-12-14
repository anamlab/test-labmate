import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactForm!: FormGroup  ;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      randomImage: [''], // You might need a custom validator for the random image
      captcha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.contactForm.value);
    } else {
      // Mark form controls as touched to display validation messages
      this.markFormGroupTouched(this.contactForm);
    }
  }

  onReset() {
    this.contactForm.reset();
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

