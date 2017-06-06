import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {


  selected = null;

  edited = {

  }

  mode="none"

  playlists = [
    {
      name: 'Angular Greatest Hits!',
      tracks: 2,
      color: '#FF0000',
      favourite: true,
    },
    {
      name: 'Test test',
      tracks: 23,
      color: '#0000FF',
      favourite: false,
    }
  ]
  
  select(playlist){
    if(playlist !== this.selected)
    this.mode = "selected"
    this.selected = playlist;
  }

  edit(playlist){
    this.mode = "edit";
    this.edited = playlist;
    this.selected = playlist;
  }

  createNew(){
    this.mode = "edit";
    var newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  save(event){
    console.log('Zapisano', event)
  }

  constructor() { }

  ngOnInit() {
  }

}
