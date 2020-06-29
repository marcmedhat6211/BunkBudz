import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { AllRentalsComponent } from './components/all-rentals/all-rentals.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    MobileMenuComponent,
    AboutComponent,
    DetailsComponent,
    AllRentalsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
