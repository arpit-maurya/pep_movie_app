import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';

import { MatInputModule } from '@angular/material/input'; 
import { MatMenuModule } from '@angular/material/menu';
import { MyServiceService } from './my-service.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingleMovieModalComponent } from './single-movie-modal/single-movie-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'; 
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavBarComponent,
    SingleMovieModalComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
