import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  impacts = [
    {
      value: '2500+',
      title: 'Nights of Shelter Provided',
      description: 'We have profoundly provided 2,510 nights of emergency shelter to women and girls experiencing gender-based violence.'
    },
    {
      value: '1000+',
      title: 'Hours of Advocacy',
      description: 'We have been able to provide 5000 women and girls, who received 1050 hours of gender-based violence advocacy.'
    },
    {
      value: '800+',
      title: 'Business Startups',
      description: 'We have provided skill training and startup businesses for 805 women survivors of violence. '
    },
    {
      value: '4000+',
      title: 'Crisis Calls',
      description: 'We have been able to respond to crisis calls of violence against women and girls with 4220 calls answered on our 24-hour crisis helpline.'
    },
    {
      value: '800+',
      title: 'Health Emergencies',
      description: 'We have been able to provide immediate health services to 850 victims/survivors of violence.'
    }
  ];
}
