import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  level = ['Beginner', 'Intermediate', 'Pro'];
  form!: FormGroup;
  unallowedusername=['test','angular','react']
  unallowedemail=['jd@gmail.com','user1@gmail.com','user2@gmail.com']

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.checkUserName.bind(this)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email], this.checkEmails.bind(this ) as AsyncValidatorFn),
      language: new FormControl('select', [Validators.required]),
      level: new FormControl('Pro', [Validators.required]),
      bio: new FormControl(null, [Validators.required]),
      address: new FormGroup({
        country: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        location: new FormControl(null, [Validators.required]),
      }),
      skills: new FormArray([]),
    });
  }
  onSubmit() {
    console.log(this.form);
  }
  onAdd() {
    const control = new FormControl(null, Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }
  onRemove(i: number) {
    (this.form.get('skills') as FormArray).removeAt(i);
  }
  checkUserName(control:FormControl):{[s:string]:boolean   }|null{
    if(this.unallowedusername.includes(control.value)){
      return {usernameForbidden:true}
    }else{
      return null
    }
  }
  checkEmails(control:FormControl):Promise<{[s:string]:boolean   }|null>{
    const promise = new Promise<{[s:string]:boolean   }|null>((resolve,reject)=>{
      setTimeout(()=>{
        if(this.unallowedemail.includes(control.value)){
          resolve({unallowedemail:true})
        }
        resolve(null)
      },1500)
    })
    return promise
  }

  onUpdate(){
    this.form.setValue({
      username:'john',
      email:'john@gmail.com',
      level:'Pro',
      language:'js',
      bio:'kkss',
      address:{
        country:'jsjs',
        city:'kff',
        location:'jhvbn'
      },
      skills:{}
    })
    this.form.reset()
  }
}

