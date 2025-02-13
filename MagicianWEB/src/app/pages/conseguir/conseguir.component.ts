import { Component, ElementRef, ViewChild } from '@angular/core';
import { EnvioDatosApiService } from '../../services/envio-datos-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conseguir',
  standalone: true,
  templateUrl: './conseguir.component.html',
  styleUrls: ['./conseguir.component.css'],
})
export class ConseguirComponent {

  constructor(private envioDatosService: EnvioDatosApiService, private router : Router) {}

  @ViewChild('nombre') nombreRef!: ElementRef;
  @ViewChild('apellido') apellidoRef!: ElementRef;
  @ViewChild('email') emailRef!: ElementRef;
  @ViewChild('telefono') telefonoRef!: ElementRef;
  @ViewChild('empresa') empresaRef!: ElementRef;
  @ViewChild('detalles') detallesRef!: ElementRef;
  @ViewChild('mensaje') mensajeRef!: ElementRef; // Solo para mostrar mensajes

   Enviar(event: Event) {
    event.preventDefault(); // Evita la recarga de la página

    const nombre = this.nombreRef.nativeElement.value;
    const apellido = this.apellidoRef.nativeElement.value;
    const email = this.emailRef.nativeElement.value;
    const telefono = this.telefonoRef.nativeElement.value;
    const empresa = this.empresaRef.nativeElement.value;
    const detalles = this.detallesRef.nativeElement.value;

    const mensaje = "Datos enviados correctamente"; // ✅ Agregar mensaje (puede ser vacío si lo manejas en el backend)

    if (nombre && apellido && email && telefono && empresa && detalles) {
      console.log("Formulario enviado con éxito.");

      const data = { nombre, apellido, email, telefono, empresa, detalles, mensaje }; // ✅ Agregamos `mensaje`

      this.envioDatosService.postData(data).subscribe({
        next: (respuesta) => {
          console.log(respuesta);
          this.router.navigate(['/consigue-terminado'])
        },
        error: (err) => {
          console.error("Error en el envío:", err);
          this.mensajeRef.nativeElement.innerText = "Error al enviar el formulario.";
          this.mensajeRef.nativeElement.style.color = "red";
        }
      });

    } else {
      this.mensajeRef.nativeElement.innerText = "Por favor, completa todos los campos.";
      this.mensajeRef.nativeElement.style.color = "red";
    }
  }
}
