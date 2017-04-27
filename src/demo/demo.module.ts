import { TourHTMLModule } from './../lib/plugin/HTMLtour/html-tour.module';
import { OtherRouteComponent } from './other-route.component';
import { RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';
import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  bootstrap: [DemoComponent],
  declarations: [DemoComponent, DocsComponent, OtherRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      component: DocsComponent,
      path: '',
      pathMatch: 'full',
    }, {
      component: OtherRouteComponent,
      path: 'other',
    }]),
    TourHTMLModule.forRoot(),
  ],
})
export class DemoModule { }
