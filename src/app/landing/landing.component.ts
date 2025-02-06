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

  testimonials = [
    {
      name: "survivor",
      desc: "Women Safe House has taught me how to name and identify the different patterns of abuse I was experiencing"
    },
    {
      name: "survivor",
      desc: "Women Safe House Shelter is the only shelter for women in Oyo State and I am grateful there was a place like this when I needed a place to go"
    },
    {
      name: "survivor",
      desc: "I called Women Safe House helpline in the middle of the night and I got the help I needed to keep me safe from my abuser"
    },
    {
      name: "survivor",
      desc: "I am grateful to Women Safe House for getting me an apartment and helping me move away from the abuse I was facing"
    },
    {
      name: "survivor",
      desc: "I will never have gotten justice for the abuse I experienced if Women Safe House had not provided a lawyer for me-survivor"
    },
    {
      name: "survivor",
      desc: "The support group at Women Safe House has provided me a safe space to talk about my feelings, past experiences without judgment-survivor"
    },
  ]

  currentTestimonyIndex = 0;

  nextTestimony() {
    // Move to the next testimony, wrapping around to the first if at the end
    this.currentTestimonyIndex = (this.currentTestimonyIndex + 1) % this.testimonials.length;
  }

  prevTestimony() {
    // Move to the previous testimony, wrapping around to the last if at the start
    this.currentTestimonyIndex = (this.currentTestimonyIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
