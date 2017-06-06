import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumCardComponent } from './album-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MusicSearchComponent, 
    AlbumListComponent, 
    AlbumCardComponent
  ],
  exports:[
    MusicSearchComponent
  ]
})
export class MusicSearchModule { }
