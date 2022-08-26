import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  level = ['Beginner', 'Intermediate', 'Pro'];
  defaultvalue='select'
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form);
    
  }
  onUpdate(){
    // this.form.setValue({
    //   bio: "user",
    //   email: "collinsfrontend@gmail.com",
    //   language: "js",
    //   level: "Pro",
    //   location: {country: 'kenya', city: 'nyeri', location: 'vtrgh'},
    //   username: "collinsfrontend@gmail.com"
    // })
    this.form.form.patchValue({
      username: "collins"
    })
  }
}
