import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { FooterComponent } from '../footer/footer.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { SobreComponent } from '../sobre/sobre.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NavComponent, 
    CommonModule,
    BtnComponent,
    SobreComponent,
    FooterComponent,
    FormComponent
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
