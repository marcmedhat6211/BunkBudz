import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private PORT = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  /*CREATING NEW AD*/
  createAd(ad){
    return this.httpClient.post(this.PORT + '/api/ads/create', ad);
  }
}
