import { Component } from '@angular/core';
import {JobListComponent} from '../job-list/job-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JobListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
