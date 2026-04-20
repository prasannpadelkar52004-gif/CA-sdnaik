import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    alert('Form submitted successfully!');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}