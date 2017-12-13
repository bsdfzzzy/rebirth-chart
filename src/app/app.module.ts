import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChartDemoModule } from './demo';
import { RouterModule } from '@angular/router';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    SharedModule.forRoot(),
    RebirthNGModule.forRoot(),
    ChartDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

