
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})


export class AppComponent implements OnInit  {
  title = 'Reactive-Forms-Practice';

  registrationSuccess = false;
reactiveForm!: FormGroup;
formSubmitted = false;



constructor(private userService: AppService){}


ngOnInit(): void {
  this.reactiveForm = new FormGroup({

firstname: new FormControl(null, [Validators.required]),
lastname: new FormControl(null,[Validators.required]),
email: new FormControl(null,[Validators.required, Validators.email]),
username: new FormControl(null,[Validators.required,Validators.minLength(5)]),
password: new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern( /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
confirmPassword: new FormControl(null,[Validators.required]),
},
{validators: passwordsMatchValidator()}
);
}


onFocus(controlName: string):void{
Object.keys(this.reactiveForm.controls).forEach(key =>{
  if (key!== controlName){

    this.reactiveForm.get(key)?.markAsUntouched();
  }
});

}



onSubmit(){

  this.formSubmitted = true;

if(this.reactiveForm.valid){

  const user: User = new User(
this.reactiveForm.value.firstname,
this.reactiveForm.value.lastname,
this.reactiveForm.value.email,
this.reactiveForm.value.username,
this.reactiveForm.value.password,
this.reactiveForm.value.confirmPassword
  );

  this.userService.registerUser(user).subscribe(
    (response: any) => {
      console.log('User added successfully:', response);
      this.reactiveForm.reset();
      this.formSubmitted = false;
      this.registrationSuccess = true;

      setTimeout(() => this.registrationSuccess = false,3000);
      
    },
    (error: any) => {
      console.error('Error adding user:', error);
    }
  );


}else{
this.reactiveForm.markAllAsTouched();


}
}



}

export function passwordsMatchValidator(): ValidatorFn{
  return (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  
  return password === confirmPassword ? null:{passwordsMismatch:true};
  }
    
  }
  
  
