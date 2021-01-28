import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { AdDetails } from 'src/app/AdDetails';
import { Router,ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Images } from 'src/app/Images';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.scss']
})
export class AdFormComponent implements OnInit {

  adDetailsObj: AdDetails;
  images: Images;

  constructor(public adsService: AdsService, public imagesService: ImagesService, private router: Router) {}

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

  public imagesForm = {
    ad_id: 16,
    image: null,
  }

  onSubmit(){
    this.adsService.createAd(this.form).subscribe((data:any)=>{
      this.adDetailsObj = data.ad;
      console.log(data.ad);
      console.log(data.ad.id);
      this.router.navigateByUrl(`/ad-details/${data.ad.id}`);
    })

    this.imagesService.createImage(this.imagesForm).subscribe((data:any)=>{
      this.images = data.image;
      console.log(data.image.ad_id);
    })
  }

}
