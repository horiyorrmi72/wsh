import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {

  publications = [
    {
      title: 'Annual Impact Report 2024',
      description: `A comprehensive overview of our organization's achievements and impact over the past year.`,
      url: '/publications/annual-report-2024.pdf',
      section: 'Report'
    },
    {
      title: 'Research on Community Empowerment',
      description: `A deep dive into the strategies and methodologies we use to empower communities around the world.`,
      url: '/publications/community-empowerment-research.pdf',
      section: 'Research'
    },
    {
      title: 'Advocacy for Social Change',
      description: `Insights and recommendations for advocating for systemic social change within communities.`,
      url: '/publications/advocacy-social-change.pdf',
      section: 'Advocacy Guide'
    }
  ]
}
