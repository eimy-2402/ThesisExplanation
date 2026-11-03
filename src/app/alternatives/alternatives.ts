import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alternatives',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './alternatives.html',
  styleUrl: './alternatives.scss',
})
export class Alternatives {}
