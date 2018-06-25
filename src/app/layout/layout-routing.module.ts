import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [{
  path: '', component: HomePageComponent,
  children: [
    {path: 'home-page', component: HomePageComponent},
    {path: '', redirectTo: 'home-page', pathMatch: 'full'}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {

}
