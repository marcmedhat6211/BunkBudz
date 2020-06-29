import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
