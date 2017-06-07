import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlaylistsModule } from './playlists/playlists.module'
import { MusicSearchModule } from './music-search/music-search.module'
import { routerModule } from './app.routing'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaylistsService } from './playlists/playlists.service';
import { MusicSharedModule } from './music-shared/music-shared.module';
import { PlaylistSelectionService } from './music-shared/playlist-selection.service'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlaylistsModule,
    MusicSearchModule,
    MusicSharedModule,
    routerModule
  ],
  providers: [
    PlaylistsService,
    PlaylistSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
