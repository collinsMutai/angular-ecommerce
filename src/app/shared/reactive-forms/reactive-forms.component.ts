import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  level = ['Beginner', 'Intermediate', 'Pro'];
  @ViewChild('form')form!:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form= new FormGroup({
      username: new FormControl('John Doe'),
      email: new FormControl(null,[Validators.required]),
      language: new FormControl('select'),
      level: new FormControl('Pro'),
      bio: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null),
      location: new FormControl(null),
    })
  }
onSubmit(){
  console.log(this.form);
  
}
}
