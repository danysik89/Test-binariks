import { Component, OnInit, Output } from '@angular/core';
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
  id:number = 1;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private http: Http, private albumsService: AlbumsService) {}



  ngOnInit() {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.id = albums.id;
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
