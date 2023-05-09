import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { CraftComponent } from './craft/craft.component';
import { PriceComponent } from './price/price.component';
import { CalcComponent } from './calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    CraftComponent,
    PriceComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
