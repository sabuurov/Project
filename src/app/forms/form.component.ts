import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
  templateUrl: './forms/form.component.html'
})

export class FormComponent{

  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({

      userName: new FormControl( 'Tom', Validators.required),
      userEmail: new FormControl(' ', [
        Validators.required,
        Validators.email
      ]),
      userPhone: new FormControl('', Validators.pattern('[0-9]{10}'))
    });
  }

  // tslint:disable-next-line:typedef
  submit(){
    console.log(this.myForm);
  }

  userNameValidator(control: FormControl): { [p: string]: boolean } | null{

    if (control.value === 'no'){
      return {userName: true};
    }
    return null;
  }
}
