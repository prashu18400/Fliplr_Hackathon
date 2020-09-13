import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';
import { Mainpic1Component } from './mainpic1/mainpic1.component'


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NotificationsComponent,
    HospitalsComponent,
    SummaryComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NewsComponent,
    Mainpic1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
