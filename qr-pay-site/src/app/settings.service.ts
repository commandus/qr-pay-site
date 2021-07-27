import { Injectable } from '@angular/core';
import { Settings } from './model/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public qrdata = '';
  constructor() {
    const s = localStorage.getItem('settings');
    if (s != null) {
      const settings = new Settings(JSON.parse(s));
      this.qrdata = settings.qrdata;
    }
  }

  public save(): void {
    const settings = {
      qrdata: this.qrdata
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
