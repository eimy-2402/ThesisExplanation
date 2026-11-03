import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingsStore } from '../services/settings-store';
import { Font, FONT_SIZES } from '../Models/settings-model';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected store = inject(SettingsStore);
  protected fonts = Object.values(Font);
  protected fontSizes = FONT_SIZES;

  protected changeFont(font: Font) {
    this.store.update({ font });
  }

  protected changeFontSize(fontSize: number) {
    this.store.update({ fontSize });
  }
}
