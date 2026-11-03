export interface SettingsModel {
  font: Font;
  fontSize: number;
  theme: Theme;
  language: Language;
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Font {
  Helvetica = 'Helvetica',
  Arial = 'Arial',
  Verdana = 'Verdana',
  Georgia = 'Georgia',
  TimesNewRoman = 'Times New Roman',
}

export const FONT_SIZES = [12, 14, 16, 18, 20, 22];
export enum Language {
  Ukrainian,
  English,
}
