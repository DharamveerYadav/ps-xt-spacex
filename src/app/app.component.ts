import { Component, OnInit } from '@angular/core';
import { SpaceXService } from './services/spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  title = 'ps-xt-spacex';
}
