import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
//import { registerLocaleData } from '@angular/common';
//import localeNl from '@angular/common/locales/nl';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BankingService } from  './services/banking.service';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LogoutComponent } from './logout/logout.component';

 //registerLocaleData(localeNl, 'nl');
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountSummaryComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDMFtBLFHTY18Lq6P6zl2419TfNYKKnw8'
    })
  ],
  providers: [BankingService, { provide: LOCALE_ID, useValue: 'en' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
