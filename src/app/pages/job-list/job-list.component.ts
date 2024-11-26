import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs: Job[] = [
    { id: 1, title: 'Développeur Frontend', company: 'TechCorp', location: 'Paris', description: 'Rejoignez notre équipe innovante...' },
    { id: 2, title: 'Data Scientist', company: 'DataWorld', location: 'Lyon', description: 'Analyse de données avancée...' },
    { id: 3, title: 'Chef de projet IT', company: 'InnovSoft', location: 'Marseille', description: 'Coordination de projets IT...' },
  ];
}
