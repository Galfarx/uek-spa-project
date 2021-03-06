import {Injectable, Inject, Optional} from '@angular/core';
import {Http} from '@angular/http';
import {Subject, Observable} from 'rxjs'

export interface Playlist {
	name: string,
	tracks: any[],
	color: string,
	favourite: boolean
}

@Injectable()
export class PlaylistsService {

	server_url = 'http://localhost:3000/playlists/';
	playlists = [];
	playlistsStream$ = new Subject<Playlist[]>();

	constructor(private http: Http) {}

	addToPlaylist(playlistId, track) {
		const playlist = this.http.get(this.server_url + playlistId)
			.map(response => response.json())
			.subscribe(playlist => {
				playlist.tracks.push(track);
				this.savePlaylist(playlist)
					.subscribe(() => {
						console.log('track added to playlist');
					});
			});

	}

	savePlaylist(playlist) {
		let request;
		if (playlist.id) {
			request = this.http.put(this.server_url + playlist.id, playlist)
		} else {
			request = this.http.post(this.server_url, playlist)
		}
		return request.map(response => response.json())
			.do(playlist => {
				this.getPlaylists()
			})
	}

	createPlaylist(): Playlist {
		return {
			name: '',
			tracks: [],
			color: '#FF0000',
			favourite: false
		};
	}

	getPlaylists() {
		return this.http.get(this.server_url)
			.map(response => response.json())
			.subscribe(playlists => {
				this.playlists = playlists;
				this.playlistsStream$.next(this.playlists)
			})
	}

	getPlaylistsStream() {
		if (!this.playlists.length) {
			this.getPlaylists()
		}
		return this.playlistsStream$.startWith(this.playlists)
	}

	getPlaylist(id) {
		return this.http.get(this.server_url + id)
			.map(response => response.json())
	}
}
