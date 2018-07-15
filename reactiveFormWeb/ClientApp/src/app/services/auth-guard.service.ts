import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from '../account/account.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private accountService: AccountService,
    private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.accountService.estaLogueado()) {
      return true;
    } else {
      this.router.navigate(['/register-login']);
      return false;
    }
  }

}
