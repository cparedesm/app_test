import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [LoginComponent, ButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
