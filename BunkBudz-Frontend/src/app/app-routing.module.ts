import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { AllRentalsComponent } from './components/all-rentals/all-rentals.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdFormComponent } from './components/ad-form/ad-form.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'all-rentals',
    component: AllRentalsComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'create-ad',
    component: AdFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
