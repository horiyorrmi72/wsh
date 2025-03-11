import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  works = [
    {
      id:1,
      header: `WE DEFEND WOMEN’S RIGHTS`,
      details: `Defending women’s rights through legal representation is crucial to promoting justice. We provide free legal services to
                        women and girls experiencing violence in local communities.`
    },
    {
      id: 2,
      header: `WE PROMOTE JUSTICE AND EQUITY`,
      details: `Women and girls experiencing violence need to have justice and equity. We promote justice and equity by challenging patriarchal structures and systems in local communities through our programs to ensure that survivors of violence have trust in the justice system. 
`
    },
    {
      id:3,
      header: `WE TRAIN AND EDUCATE`,
      details: `Training and empowerment for feminist activists in local communities is essential to promoting women’s rights. We train feminist activists to promote safe spaces for women, addressing discrimination against women.`
    },
    {
      id:4,
      header: `WE PROTECT AND EMPOWER`,
      details: `Women and girls who experience violence often need support to restart their lives. We provide a 24-hour women’s shelter that provides short-term housing for women and girls of all ages facing all forms of violence across Nigeria.`
    },
  ]

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
      desc: "I will never have gotten justice for the abuse I experienced if Women Safe House had not provided a lawyer for me"
    },
    {
      name: "survivor",
      desc: "The support group at Women Safe House has provided me a safe space to talk about my feelings, past experiences without judgment"
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
