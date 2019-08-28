import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTextViewComponent } from './core-ui/custom-text-view/custom-text-view.component';
import { TextInputComponent } from './core-ui/text-input/text-input.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CustomTextViewComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
