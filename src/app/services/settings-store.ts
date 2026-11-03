import { getState, patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Font, Language, SettingsModel, Theme } from '../Models/settings-model';

const SETTINGS_STORAGE_KEY = 'eimy_settings';

export const SettingsStore = signalStore(
  { providedIn: 'root' },
  withState<SettingsModel>(() => {
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (!savedSettings) {
      return {
        font: Font.TimesNewRoman,
        fontSize: 14,
        language: Language.English,
        theme: Theme.Light,
      } as SettingsModel;
    }

    return JSON.parse(savedSettings) as SettingsModel;
  }),
  withMethods((store) => {
    return {
      update(changedSettings: Partial<SettingsModel>) {
        patchState(store, changedSettings);
        let storeValue = getState(store);
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(storeValue));
      },
    };
  }),
);
