import { Component, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ISignInBody, User } from '../../interface';
import { LocalstorageService } from '../../../shared';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit{
  public isChecked =false;
  private router = inject(Router);
  public signinForm!: FormGroup;
  private authService= inject(AuthService);
  public errors = signal<string[]>([])

  ngOnInit(): void {
    this.setForm();
  }


  private setForm(): void{
    this.signinForm = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  public tapLogin(){
    const body: ISignInBody = {
      username: this.signinForm.value.username!,
      password: this.signinForm.value.password!
    }
    this.authService.authLogin(body)
      .subscribe({
        next: (res)=>{
          console.log(res)
          this.router.navigate(['/dashboard'],{
            replaceUrl: true
          })
        },
        error: (err)=>{
          console.log(err.error)
          this.errors.set(err.error.message)
        }
      })
  }
}
