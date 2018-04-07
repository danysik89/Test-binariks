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

  pager: any = {};
  pagedItems: any[];

  constructor(private http: Http, private albumsService: AlbumsService) {}



  ngOnInit() {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.id = albums.id;
      this.setPage(1);
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    this.pager = this.albumsService.getPager(this.albums.length, page);

    this.pagedItems = this.albums.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
