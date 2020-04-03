import { Component, OnInit, Inject } from '@angular/core';
import { faAdjust as faAdjust } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../theme.service';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  private faAdjust = faAdjust;
  private data:any=[]

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private themeService: ThemeService) { }

  ngOnInit() {
    this.savedTheme() ? this.loadLocal("theme") : this.themeService.setDarkTheme();
  }

  toggleTheme() {
    this.themeService.isDarkTheme() ?
    this.themeService.setLightTheme() : this.themeService.setDarkTheme();

    this.saveLocal("theme", this.themeService.getActiveTheme());
  }

  saveLocal(key, val): void {
    console.log("Saving theme to local storage.");
    this.storage.set(key, val);
  }
  loadLocal(key): void {
    console.log('Loading theme from local storage.');
    this.themeService.setActiveTheme(this.storage.get(key));
  }
  savedTheme(): boolean {
    return this.storage.get("theme") ? true : false;
  }
}
