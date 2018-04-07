import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AlbumsService } from '../albums.service';
import { AlbumsComponent } from '../albums/albums.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {

  id = 1;
  photos = [];

  constructor(private http: Http, private albumsService: AlbumsService, private route: ActivatedRoute) {
    
  }

  

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.albumsService.getPhotos(id).subscribe(photos => {       
      this.photos = photos;     
      this.id = photos.id;
    })
    

    
  }

}
