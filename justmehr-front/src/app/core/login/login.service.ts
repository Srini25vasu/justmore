import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { AccountService } from 'src/app/core/auth/account.service';
import { AuthProviderService } from 'src/app/core/auth/auth-provider.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private accountService: AccountService, private authServerProvider: AuthProviderService) {}

  login(credentials) {
    return this.authServerProvider.login(credentials).pipe(flatMap(() => this.accountService.identity(true)));
  }

  logout() {
    this.authServerProvider.logout().subscribe(null, null, () => this.accountService.authenticate(null));
  }
}
