import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';

const lettersAndSpacesPattern = /^[A-Za-z\s]+$/;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})


export class FormularioComponent {
  contactoForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(lettersAndSpacesPattern) // Aplica la validación de expresión regular
    ]),
    apellido_paterno: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(lettersAndSpacesPattern) // Aplica la misma validación de expresión regular
    ]),
    apellido_materno: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(lettersAndSpacesPattern) // Aplica la misma validación de expresión regular
    ])
  });
  contactoId?: number;

  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadDataIntoForm();
  }

  saveContacto(): void {
    if (this.contactoId) {
      this.contactoService.updateContacto(this.contactoId, this.contactoForm.value).subscribe(contacto => {
        this.router.navigateByUrl('/contacto');
      });
    } else {
      this.contactoService.createContacto(this.contactoForm.value).subscribe(contacto => {
        this.router.navigateByUrl('/contacto');
      });
    }
  }

  hasError(field: string): boolean {
    const errorsObject = this.contactoForm.get(field)?.errors ?? {};
    const errors = Object.keys(errorsObject);

    if (errors.length && (this.contactoForm.get(field)?.touched || this.contactoForm.get(field)?.dirty)) {
      return true;
    }

    return false;
  }

  getCurrentError(field: string): string {
    const errorsObject = this.contactoForm.get(field)?.errors ?? {};
    const errors = Object.keys(errorsObject);

    if (!errors)
      return '';

    return errors[0];
  }

  getFormTitle(): string {
    return this.contactoId ? 'Editar Contacto' : 'Nuevo Contacto';
  }

  private loadDataIntoForm(): void {
    this.contactoId = Number(this.route.snapshot.paramMap.get('id'));
  
    if (this.contactoId) {
      console.log('Contacto ID:', this.contactoId); // Verifica que se esté obteniendo el ID correctamente
      this.contactoService.getContacto(this.contactoId).subscribe(contacto => {
        console.log('Contacto:', contacto.apellido_materno); // Verifica que se esté recibiendo el contacto correctamente
        this.contactoForm.patchValue({
          nombre: contacto.nombre,
          apellido_paterno: contacto.apellido_paterno,
          apellido_materno: contacto.apellido_materno
        });
      });
    }
  }
  
}
