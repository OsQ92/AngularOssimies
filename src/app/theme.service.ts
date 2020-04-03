//https://www.freecodecamp.org/news/how-to-create-themes-for-your-angular-7-apps-using-css-variables-69251690e9c5/
import { Injectable } from '@angular/core';
import { Theme, light, dark } from './themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme;
  private themes: Theme[] = [light, dark];

  getThemes(): Theme[] {
    return this.themes;
  }
  getActiveTheme(): Theme {
    return this.active;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
    console.log("Dark theme set.");
}

  setLightTheme(): void {
    this.setActiveTheme(light);
    console.log("Light theme set.");
  }
  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }
  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

  constructor() { }
}
