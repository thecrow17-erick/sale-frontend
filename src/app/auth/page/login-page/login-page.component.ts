import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

}
