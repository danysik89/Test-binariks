import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {

  @Input() album;

  constructor() { }

  ngOnInit() {
  }

}
