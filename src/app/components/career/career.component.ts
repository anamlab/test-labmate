import { Component ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  @ViewChild('fileInput') fileInput: any;
  careerForm!: FormGroup  ;
  placeholderText = 'Upload CV';
  
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.careerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', Validators.required],
      randomImage: [''], // You might need a custom validator for the random image
      captcha: ['', Validators.required],
    });
  }

  selectFile(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    this.placeholderText = selectedFile.name;
    // Handle the selected file, for example, you can store it in a variable or upload it
    console.log('Selected File:', selectedFile);
  }
  
  onSubmit() {
    if (this.careerForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.careerForm.value);
    } else {
      // Mark form controls as touched to display validation messages
    }
  }
  
}
