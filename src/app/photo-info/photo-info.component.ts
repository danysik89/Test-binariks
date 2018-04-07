import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.sass']
})
export class PhotoInfoComponent implements OnInit {

  photoInfo ;

  constructor(private http: Http, private albumsService: AlbumsService, private route: ActivatedRoute, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('idPhoto');
    this.albumsService.getPhotoInfo(id).subscribe(photoInfo => {       
      this.photoInfo = photoInfo;
    }
  )    

    
  }

}
