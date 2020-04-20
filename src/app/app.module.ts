import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { DataprotectionComponent } from './pages/dataprotection/dataprotection.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    StatisticsComponent,
    CoursesComponent,
    VehiclesComponent,
    DataprotectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
