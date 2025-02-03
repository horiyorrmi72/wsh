import { Component } from '@angular/core';

@Component({
  selector: 'app-abuse',
  templateUrl: './abuse.component.html',
  styleUrls: ['./abuse.component.css']
})
export class AbuseComponent {
  abuseTypes = [
    {
      title: 'Physical Abus',
      description: 'Involves physical harm or injury to someone, such as hitting, slapping, or other acts of violence.',
    },
    {
      title: 'Emotional Abuse',
      description: 'Involves undermining an individual’s self-esteem through verbal assaults,criticism, or manipulation.',
    },
    {
      title: 'Financial Abuse',
      description: 'Controlling or misusing another person’s financial resources without their consent.',
    },
    {
      title: 'Sexual Abuse',
      description: 'Involves any unwanted sexual activity, including harassment, assault, or exploitation.',
    },
    {
      title: 'Neglect',
      description: 'Failing to meet the basic needs of a dependent individual, such as food, shelter, or medical care.',
    },
    {
      title: 'Digital Abuse',
      description: 'Using technology to harass, stalk, or intimidate someone through social media, texts, or emails.',
    },

  ]

}
