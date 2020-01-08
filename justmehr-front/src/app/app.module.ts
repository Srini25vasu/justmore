import { TrainerModule } from './features/trainer/trainer.module';
import { HomeComponent } from './home/home.component';
import { CourseModule } from './features/course/course.module';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layouts/main/main.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './shared/login/login.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    HomeModule,
    CourseModule,
    TrainerModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
