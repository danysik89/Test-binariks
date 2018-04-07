import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from './albums.service';
import { PhotosComponent } from './photos/photos.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PhotoInfoComponent } from './photo-info/photo-info.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: PhotosComponent},
  {path: 'albums/:id/:idPhoto', component: PhotoInfoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    MainComponent,
    PhotoInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
