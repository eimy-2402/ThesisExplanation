import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './header/header';
import { SettingsStore } from './services/settings-store';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '[attr.data-theme]': 'store.theme()',
    '[style.font-family]': 'store.font()',
    '[style.font-size.px]': 'store.fontSize()',
  },
})
export class App {
  readonly store = inject(SettingsStore);
  protected readonly title = signal('Project1');
  protected titleNotReactive = 'not reactive title';
}
