import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgxPayPalModule} from 'ngx-paypal';
import { StripeComponent } from './stripe/stripe.component';


@NgModule({
  declarations: [PaymentComponent, StripeComponent],
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    PaymentRoutingModule,
    NgxPayPalModule
  ]
})
export class PaymentModule { }
