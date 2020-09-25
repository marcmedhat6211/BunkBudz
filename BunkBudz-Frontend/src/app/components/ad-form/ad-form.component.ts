import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsService } from 'src/app/services/ads.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.scss']
})
export class AdFormComponent implements OnInit {

  // f:NgForm

  constructor(public adsService: AdsService) { }

  ngOnInit(): void {
  }

  public form = {
    user_id: 1,
    location: null,
    price: null,
    description: null,
    utilities: null,
    pool: null,
    fitness_center: null,
    parking: null,
    free_parking: null,
    wheelchair_access: null,
    wifi: null,
    ac: null,
    nearby_grocery_store: null,
    subway: null,
    bus: null,
    train: null,
    occupant_gender: null,
    rental_type: null,
    rental_term: null,
    furnished: null,
    pet_friendly: null,
    private_bath: null,
    smoking_allowed: null,
    party_room: null,
    security_on_site: null,
    start_date: null,
    end_date: null,
    type: null,
    bedrooms_number: null,
    baths_number: null
  }

  onSubmit(){
    this.adsService.createAd(this.form).subscribe((data:any[])=>{
      console.log(data);
    })
  }

}
