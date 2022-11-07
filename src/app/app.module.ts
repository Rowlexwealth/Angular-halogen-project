import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { ContactComponent } from './shared/contact/contact.component';
import { InsightComponent } from './shared/insight/insight.component';
import { IndustryComponent } from './shared/industry/industry.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './shared/search/search.component';
import { CarouselModule } from './carousel/carousel.module';
import { SaveComponent } from './shared/save/save.component';
import { SlideComponent } from './shared/slide/slide.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NextDirective } from './shared/next.directive';
import { PrevDirective } from './shared/prev.directive';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    InsightComponent,
    IndustryComponent,
    FooterComponent,
    SearchComponent,
    SaveComponent,
    SlideComponent,
    HeaderComponent,
    NextDirective,
    PrevDirective,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
