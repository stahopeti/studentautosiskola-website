import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { DataprotectionComponent } from './pages/dataprotection/dataprotection.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'dataprotection', component: DataprotectionComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
