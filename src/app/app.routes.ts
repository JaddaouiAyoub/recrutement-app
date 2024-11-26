import { Routes } from '@angular/router';
import {JobDetailsComponent} from './pages/job-details/job-details.component';
import {JobListComponent} from './pages/job-list/job-list.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
];
