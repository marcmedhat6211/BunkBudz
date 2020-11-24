import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdDetailsService {

  private PORT = "http://localhost:8000";
  public id = window.location.pathname.split("/").pop();
  
  constructor(private httpClient: HttpClient) { }

  /*SHOWING THE AD DETAILS*/
  showAd(){
    return this.httpClient.get(this.PORT + '/api/ads/' + this.id);
  }

}
