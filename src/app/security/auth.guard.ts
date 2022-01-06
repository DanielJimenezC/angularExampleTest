import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Constants } from '../shared/constants/Constants';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private snackBar: MatSnackBar
    ) { }
    canActivate(route: ActivatedRouteSnapshot) {
        const token = this.authService.userTokenData;
        if (token) {
            return true;
        }
        this.snackBar.open('No autenticado, agregar "token" en cookies y actualizar', '', {
            duration: 3000
        });
        this.router.navigate([`/${Constants.RootApi}`]);
        return false;
    }
}