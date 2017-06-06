import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content-card',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Playlista</h4>
        <p class="card-text">Wybierz Playlistę</p>
      </div>
    </div>
  `,
  styles: [`
    h4{ 
      color: red;
    }
  `],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
