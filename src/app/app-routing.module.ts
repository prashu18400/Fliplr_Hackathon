import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'notification', component: NotificationsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
