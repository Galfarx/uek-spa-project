import { Component, OnInit } from '@angular/core';
import {PlaylistSelectionService} from './playlist-selection.service';
import { PlaylistsService } from '../playlists/playlists.service'

@Component({
  selector: 'playlist-selector',
  templateUrl: './playlist-selector.component.html',
  styleUrls: ['./playlist-selector.component.css']
})
export class PlaylistSelectorComponent implements OnInit {

  selectedId;
  playlists = [];

  constructor(private selectionService: PlaylistSelectionService,
              private playlistService: PlaylistsService) { }

  setSelected(id) {
    this.selectionService.select(id);
  }

  ngOnInit() {
    this.selectionService.getSelectionStream()
      .subscribe( id => {
        this.selectedId = id;
      })

    this.playlistService.getPlaylistsStream()
      .subscribe( playlists => {
        this.playlists = playlists;
      })
  }
}
