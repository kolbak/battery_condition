import { Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  IsAuthored: BehaviorSubject<boolean>;
  isAuth: boolean = false;
  constructor(private router: Router, private server: ServerService) {
    let status = server.getUserStatus();
    this.server.IsAuthored.next(status);
    if(status){
      this.isAuth = status;
    }
    // if(){
    //   this.realTimeSubscription.unsubscribe();
    // }
  }

  authForm: FormGroup
  ngOnInit(): void {
    if(this.isAuth){
      setTimeout(() => {
        this.router.navigate(['dashboard'])
      }, 1000)
    }
    this.authForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onFocus() {
    switch(this.incorrectDataCode){
      case 100:
        this.authForm.controls['username'].setErrors(null)
        this.authForm.controls['password'].setErrors(null)
        break;
      case 305:
        this.authForm.controls['password'].setErrors(null)
        break;
    }
  }

  incorrectDataCode: number;
  signIn(event: any) {
    let user = {
      username: event.target[0].value,
      password: event.target[1].value
    }
    
    if(this.server.getJwtToken()){
      this.router.navigate(['dashboard'])
    } else {
      this.server.login(user).subscribe((resp) => {
        if(resp){
          this.router.navigate(['dashboard'])
        } else {
          this.incorrectDataCode = this.server.loginError.code;

          switch(this.incorrectDataCode){
            case 100:
              this.authForm.controls['username'].setErrors({'incorrectData': true})
              this.authForm.controls['password'].setErrors({'incorrectData': true})
              break;
            case 305:
              this.authForm.controls['password'].setErrors({'incorrectPassword': true})
              break;
          }
        }
      });
    }
  }
}
