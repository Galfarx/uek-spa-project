import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routerModule } from './playlists.routing'

import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistsService } from './playlists.service'
import { MusicSharedModule } from '../music-shared/music-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusicSharedModule,
    routerModule,
  ],
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports: [
    PlaylistsComponent
  ],
  providers: []
})
export class PlaylistsModule { }
