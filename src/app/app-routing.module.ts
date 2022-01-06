import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './security/auth.guard';

import { ApiComponent } from './views/api/api.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { LocalComponent } from './views/local/local.component';
import { NavbarComponent } from './views/navbar/navbar.component';

const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: NavbarComponent, 
    children: [
      { path: '', redirectTo: 'api', pathMatch: 'full' },
      { path: 'api', component: ApiComponent },
      { path: 'local', component: LocalComponent },
      { path: 'auth', component: AuthenticationComponent, canActivate: [AuthGuard] }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
