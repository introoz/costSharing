import {Component,OnInit} from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import {Message,SelectItem} from 'primeng/primeng';
import { AuthenticationService } from 'app/_services/authentication.service';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 msgs: Message[] = [];

    userform: FormGroup;
    
    submitted: boolean;
    
    loading = false;

    error = '';
    
    constructor(
      private fb: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService) {}
    
    ngOnInit() {
        this.userform = this.fb.group({
            'login': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
        });
        
        // reset login status
        // this.authenticationService.logout();
    }
    
    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
        //
        console.log( this.userform.value);

        this.loading = true;
        this.authenticationService.login(this.userform.value.login, this.userform.value.password)
            .subscribe(result => {
              if(result === true) {
                //login successful
                console.log('udalo sie');
                this.router.navigate(['/home']);
              } else {
                //login failed
                console.log('nie udalo sie');
                this.error = 'Username or password is incorrect';
                this.loading = false;
              }
            });
    }
    
    get diagnostic() { return JSON.stringify(this.userform.value); }

}