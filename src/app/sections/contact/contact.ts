import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para directivas como *ngIf
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; // Importa módulos para formularios reactivos
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  // FormGroup para el formulario de contacto
  contactForm!: FormGroup;

  // Banderas para el estado del envío del formulario
  formSubmitted: boolean = false;
  formSuccess: boolean = false;
  formError: boolean = false;

  // Información de contacto adicional
  contactInfo = {
    email: 'contacto@tinifyx.com',
    phone: '+52 999 123 4567', // Ejemplo de número local de Mérida/México
    address: 'Calle 60 #123 x 45 y 47, Centro, Mérida, Yucatán, México',
    hours: 'Lunes - Viernes: 9:00 AM - 6:00 PM (CST)',
  };

  constructor() {}

  ngOnInit(): void {
    // Inicializa el FormGroup con sus FormControls y validadores
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''), // Opcional, sin validación específica
      subject: new FormControl(''), // Opcional
      message: new FormControl('', Validators.required),
    });
  }

  /**
   * Maneja el envío del formulario.
   * Valida el formulario y simula un envío exitoso o fallido.
   */
  onSubmit(): void {
    this.formSubmitted = true; // Indica que se intentó enviar el formulario

    // Marca todos los campos como 'touched' para mostrar los mensajes de validación
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      // Simular un envío exitoso (puedes reemplazar esto con una llamada a un servicio real)
      this.formSuccess = true;
      this.formError = false; // Asegurarse de que el error esté en falso
      this.contactForm.reset(); // Resetea el formulario después del envío exitoso
      // Opcional: Puedes resetear formSubmitted después de un tiempo para ocultar el mensaje
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    } else {
      // Si el formulario no es válido, mostrar mensaje de error
      this.formSuccess = false;
      this.formError = true;
      console.error('Formulario inválido. Por favor, revisa los campos.');
    }
  }
}
