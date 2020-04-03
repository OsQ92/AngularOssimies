import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NaviComponent } from './navi/navi.component';
import { FooterComponent } from './footer/footer.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemorydataService } from './memorydata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GalleryComponent,
    NaviComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    FontAwesomeModule,
    StorageServiceModule,
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    InMemoryWebApiModule.forRoot(MemorydataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
