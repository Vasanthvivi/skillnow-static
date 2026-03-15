import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

const WHATSAPP_NUMBER = '919707240250'; // Change to your business number (country code + number, no + or spaces)

@Component({
  selector: 'app-whatsapp-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './whatsapp-contact.html',
  styleUrl: './whatsapp-contact.scss',
})
export class WhatsAppContact {
  isOpen = false;
  form: FormGroup;

  courseOptions = [
    'Web Development',
    'UI/UX Design',
    'Java Full Stack',
    '.Net Full Stack',
    'Python Full Stack',
    'MEAN Stack',
    'DevOps',
    'Cloud & Data',
    'Other',
  ];

  cityOptions = [
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Mumbai',
    'Delhi',
    'Pune',
    'Kolkata',
    'Other',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      course: [''],
      onlineTraining: ['Yes'],
      city: [''],
      message: ['', Validators.required],
    });
  }

  openPopup(): void {
    this.isOpen = true;
  }

  closePopup(): void {
    this.isOpen = false;
    this.form.reset({ onlineTraining: 'Yes' });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    const lines = [
      `Name: ${v.name}`,
      `Mobile: ${v.mobile}`,
      `Email: ${v.email}`,
      `Course: ${v.course || '—'}`,
      `Online Training: ${v.onlineTraining || '—'}`,
      `City: ${v.city || '—'}`,
      `Message: ${v.message}`,
    ];
    const text = lines.join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    this.closePopup();
  }

  closeOnBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('whatsapp-modal-backdrop')) {
      this.closePopup();
    }
  }
}
