import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Dados adicionais necessários para a API StaticForms
      const payload = {
        ...formData,
        accessKey: 'dfe6b55e-31ac-40e0-8b45-48e978e49cec', // Substitua por sua chave de acesso
        subject: 'Novo Contato do Formulário',
        redirectTo: '', // URL de redirecionamento após envio
      };

      this.http.post('https://api.staticforms.xyz/submit', payload).subscribe(
        response => {
          console.log('Formulário enviado com sucesso!', response);
          alert('Formulário enviado com sucesso!');
        },
        error => {
          console.error('Erro ao enviar o formulário', error);
        }
      );
    }
  }

}
