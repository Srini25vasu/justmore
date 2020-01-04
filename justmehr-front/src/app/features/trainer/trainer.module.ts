import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerComponent } from './trainer.component';
import { MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [TrainerComponent],
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    TrainerRoutingModule
  ]
})
export class TrainerModule { }
