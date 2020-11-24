import { Component, OnInit } from '@angular/core';
import { AdDetailsService } from 'src/app/services/ad-details.service';
import { AdDetails } from 'src/app/AdDetails';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  adDetailsObj: AdDetails;

  constructor(public adDetails: AdDetailsService) { }

  ngOnInit(): void {
    this.adDetails.showAd().subscribe((data: any)=>{
      this.adDetailsObj = data.data;
      console.log(this.adDetailsObj);
    });
  }
  
}
