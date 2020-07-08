import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarDirective } from './directives/nav-bar.directive';
import { ContactComponent } from './footer/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonHighLightDirective } from './directives/button-high-light.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    FooterComponent,
    NavBarDirective,
    ContactComponent,
    ButtonHighLightDirective,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
 
    
  ],
  providers: [NavBarDirective,  ButtonHighLightDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
