import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { AlbumsService } from '../albums.service';

@Component({
  moduleId: module.id,
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {

  
  albums = [];
  id = 1;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private http: Http, private albumsService: AlbumsService) {}

  getPhotos() {
    return  this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + this.id)
      .map(response => {
          return response.json();
      })
      .subscribe(photos => {
        this.photos = photos;
      })        
  }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
      // initialize to page 1
      this.setPage(1);
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.albumsService.getPager(this.albums.length, page);

    // get current page of items
    this.pagedItems = this.albums.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
