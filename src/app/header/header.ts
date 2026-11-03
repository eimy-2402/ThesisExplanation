import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Settings } from '../settings/settings';
import { SettingsStore } from '../services/settings-store';
import { Theme } from '../Models/settings-model';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Settings],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected Theme = Theme;
  protected store = inject(SettingsStore);
  protected changeTheme() {
    this.store.update({ theme: this.store.theme() == Theme.Dark ? Theme.Light : Theme.Dark });
  }
}
