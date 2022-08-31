import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    FormBuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    FormBuilderComponent
  ]
})
export class SharedModule { }
