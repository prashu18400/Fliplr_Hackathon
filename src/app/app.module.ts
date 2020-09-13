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
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
