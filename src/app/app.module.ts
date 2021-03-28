import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DatePipPipe } from './date-pip.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormComponent,
    QuoteDetailComponent,
    DatePipPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
