import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { ContactComponent } from './shared/contact/contact.component';
import { IndustryComponent } from './shared/industry/industry.component';
import { InsightComponent } from './shared/insight/insight.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'industry',component:IndustryComponent},
  {path:'insight',component:InsightComponent},
  {path:'support',component:SupportComponent},
  {path:'search/:searchTerm', component:SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
