import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IResponse } from '../../shared/interface/response.interface';
import { ISignInBody, ISignInResponse, Permission, User } from '../interface';
import { enviroment } from '../../enviroment';
import { LocalstorageService } from '../../shared';
import { Router } from '@angular/router';
import { permission } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${enviroment.baseUrl}/auth`
  constructor(
    private http: HttpClient,
    private readonly localStorageService: LocalstorageService,
    private router: Router
  ) {}

  public authLogin(body: ISignInBody):Observable<IResponse<ISignInResponse>>{
    const urlLogin = `${this.url}/sign-in`;
    console.log({url: urlLogin})
    return this.http.post<IResponse<ISignInResponse>>(urlLogin,body)
      .pipe(
        tap(res => {
          this.localStorageService.setItem<User>('user', res.data.user);
          this.localStorageService.setItem<string>('token',res.data.token);
          this.localStorageService.setItem<boolean>('isLogged', true);
        })
      );
  }

  public logout(): void {
    this.localStorageService.setItem<boolean>('isLogged', false);
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('user');
    this.router.navigateByUrl("/auth",{replaceUrl: true})
  }

  public hasAccess(inPermissions: permission[]): boolean {
    const user = this.localStorageService.getItem<User>('user');
    if (!user || !user.role || !user.role.permissions) {
      console.warn('Usuario no autenticado o sin permisos.');
      return false;
    }
    const isPermissions = user.role.permissions.map(p => p.name);
    return inPermissions.some(per => isPermissions.includes(per.toString()));
  }
}
