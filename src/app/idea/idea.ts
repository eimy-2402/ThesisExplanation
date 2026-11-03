import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-idea',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './idea.html',
  styleUrl: './idea.scss',
})
export class Idea {}
