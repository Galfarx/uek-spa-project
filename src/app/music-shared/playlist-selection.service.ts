import { Injectable } from '@angular/core';
import { PlaylistsService } from '../playlists/playlists.service';
import { Subject } from 'rxjs';

@Injectable()
export class PlaylistSelectionService {

  selectedId;
  selectedIdStream = new Subject();

  constructor(private playlistService: PlaylistsService) {
    this.playlistService.getPlaylistsStream()
      .subscribe( playlists => {
        if (!this.selectedId) {
          this.select(playlists[0]);
        }
      })
  }

  getSelectionStream() {
    return this.selectedIdStream.startWith(this.selectedId);
  }

  select(playlistId) {
    this.selectedId = playlistId;
    this.selectedIdStream.next(this.selectedId);
  }

  addToPlaylist(track) {
    this.playlistService.addToPlaylist(this.selectedId, track);
  }
}
