import { ChangeDetectorRef, Component, inject, OnDestroy, } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../../auth/services';
import { permission, routerNav } from '../../utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  templateUrl: './layout-navbar.component.html',
  styleUrl: './layout-navbar.component.css'
})
export class LayoutNavbarComponent implements OnDestroy{
  public mobileQuery!: MediaQueryList;
  public items = routerNav;
  public permissions = permission;
  public shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  public fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  constructor(
    private authService: AuthService
  ) {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public logout(): void {
    this.authService.logout();
  }

  public isAccess(permission: permission[]): boolean {
    return this.authService.hasAccess(permission);
  }
}
