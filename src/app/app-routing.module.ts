import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuardService} from '../shared/services/guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'layout' },
  {path: 'layout', canActivate: [GuardService], loadChildren: './layout/layout.module#LayoutModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
