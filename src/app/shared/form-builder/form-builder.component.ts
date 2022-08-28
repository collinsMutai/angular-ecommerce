import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AsyncValidatorFn, FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      username:[null, [Validators.required]],
      password:[null, [Validators.required, Validators.minLength(8), this.checkSpecialCharacters, this.checkNumber, this.checkCapital,]]
    })
    this.form.valueChanges.subscribe((changes)=>{
      console.log(changes);
      
    })
  }
onSubmit(){
  console.log(this.form);
}
checkSpecialCharacters(control:FormControl):{[s:string]:boolean   }|null{
  const value = control.value
  const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\?]+/.test(value)
  return !special?{special:true}:null

}
checkNumber(control:FormControl):{[s:string]:boolean   }|null{
  const value = control.value
  const number =  /[0-9]+/.test(value)
  return !number?{number:true}:null
 
}
checkCapital(control:FormControl):{[s:string]:boolean   }|null{
  const value = control.value
  const capital =  /[A-Z]+/.test(value)
  return !capital?{capital:true}:null

}
checkMinimum(): boolean{
  const result = this.form.get('password')?.errors!['minlength'] as {actualLength:number, requiredLength:number}
  if(result.actualLength<result.requiredLength){
    return true
  }else{
     return false
  }
}
}










// level = ['Beginner', 'Intermediate', 'Pro'];
// form!: FormGroup;
// unallowedusername=['test','angular','react']
// unallowedemail=['jd@gmail.com','user1@gmail.com','user2@gmail.com']

// constructor(private fb:FormBuilder) { }

// ngOnInit(): void {
//   this.form = this.fb.group({
//     username: [null, [
//       Validators.required,
//       this.checkUserName.bind(this)
//     ]],
//     email: [null, [Validators.required, Validators.email], this.checkEmails.bind(this ) as AsyncValidatorFn],
//     language: ['select', [Validators.required]],
//     level: ['Pro', [Validators.required]],
//     bio: [null, [Validators.required]],
//     address: this.fb.group({
//       country: [null, [Validators.required]],
//       city: [null, [Validators.required]],
//       location: [null, [Validators.required]],
//     }),
//     skills: [[]],
//   });
// }
// onSubmit() {
//   console.log(this.form);
// }
// onAdd() {
//   const control = [null, Validators.required];
//   (this.form.get('skills') as FormArray).push(control);
// }
// getControls() {
//   return (this.form.get('skills') as FormArray).controls;
// }
// onRemove(i: number) {
//   (this.form.get('skills') as FormArray).removeAt(i);
// }
// checkUserName(control:FormControl):{[s:string]:boolean   }|null{
//   if(this.unallowedusername.includes(control.value)){
//     return {usernameForbidden:true}
//   }else{
//     return null
//   }
// }
// checkEmails(control:FormControl):Promise<{[s:string]:boolean   }|null>{
//   const promise = new Promise<{[s:string]:boolean   }|null>((resolve,reject)=>{
//     setTimeout(()=>{
//       if(this.unallowedemail.includes(control.value)){
//         resolve({unallowedemail:true})
//       }
//       resolve(null)
//     },1500)
//   })
//   return promise
// }

// onUpdate(){
//   this.form.setValue({
//     username:'john',
//     email:'john@gmail.com',
//     level:'Pro',
//     language:'js',
//     bio:'kkss',
//     address:{
//       country:'jsjs',
//       city:'kff',
//       location:'jhvbn'
//     },
//     skills:{}
//   })
//   this.form.reset()
// }
// }

