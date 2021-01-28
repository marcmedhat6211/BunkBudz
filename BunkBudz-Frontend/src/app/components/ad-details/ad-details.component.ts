import { Component, OnInit } from '@angular/core';
import { AdDetailsService } from 'src/app/services/ad-details.service';
import { AdDetails } from 'src/app/AdDetails';
import { Images } from 'src/app/Images';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  adDetailsObj: AdDetails;
  images: Images;

  constructor(public adDetails: AdDetailsService, public imagesService: ImagesService) { }

  ngOnInit(): void {
    this.adDetails.showAd().subscribe((data: any)=>{
      this.adDetailsObj = data.data;
      console.log(this.adDetailsObj);
    });

    this.imagesService.showImage().subscribe((data:any)=>{
      this.images = data.data;
      console.log(this.images);
    });
  }
  
}
