import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';


import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule  ]
})
export class HomeModule { }
