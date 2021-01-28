import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private PORT = "http://localhost:8000";
  public id = window.location.pathname.split("/").pop();

  constructor(private httpClient: HttpClient) { }

  /*CREATING NEW IMAGE*/
  createImage(image) {
    return this.httpClient.post(this.PORT + '/api/images/create', image);
  }

  /*SHOWING THE IMAGE*/
  showImage() {
    return this.httpClient.get(this.PORT + '/api/images' + this.id);
  }
}
