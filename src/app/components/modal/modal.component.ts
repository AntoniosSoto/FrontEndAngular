import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // Definimos un FormGroup para manejar el formulario
  contactoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Inicializamos el FormGroup con validaciones
    this.contactoForm = this.formBuilder.group({
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required]
    });
  }

  // Método para acceder fácilmente a los controles del formulario en el HTML
  get f() { return this.contactoForm.controls; }

  // Método para enviar el formulario
  onSubmit() {
    // Si el formulario es válido, podemos enviar los datos
    if (this.contactoForm.valid) {
      // Aquí puedes manejar el envío de datos al servidor
      console.log(this.contactoForm.value);
    } else {
      // Si el formulario es inválido, marcamos los campos como tocados para mostrar los mensajes de error
      this.contactoForm.markAllAsTouched();
    }
  }
}
