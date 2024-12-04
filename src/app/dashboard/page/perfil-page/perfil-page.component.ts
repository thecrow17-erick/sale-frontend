import { Component, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { LocalstorageService } from '../../../shared';
import { User } from '../../../auth/interface';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './perfil-page.component.html',
})
export class PerfilPageComponent implements OnInit {
  public localStorage = inject(LocalstorageService);
  public  user = signal<User | null>(null);


  ngOnInit(): void {
      this.user.set(this.localStorage.getItem<User>('user'));
  }


}
