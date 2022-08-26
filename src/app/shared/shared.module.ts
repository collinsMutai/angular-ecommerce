import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



@NgModule({
  declarations: [
    FooterComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ]
})
export class SharedModule { }
