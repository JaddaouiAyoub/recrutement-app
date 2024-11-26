import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  job: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const jobId = this.route.snapshot.params['id'];
    this.job = this.getJobDetails(jobId);
  }

  getJobDetails(id: number) {
    const jobs = [
      { id: 1, title: 'Développeur Frontend', company: 'TechCorp', location: 'Paris', description: 'Rejoignez notre équipe innovante...' },
      { id: 2, title: 'Data Scientist', company: 'DataWorld', location: 'Lyon', description: 'Analyse de données avancée...' },
      { id: 3, title: 'Chef de projet IT', company: 'InnovSoft', location: 'Marseille', description: 'Coordination de projets IT...' },
    ];
    return jobs.find((job) => job.id === +id);
  }
}
