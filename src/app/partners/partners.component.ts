import { Component } from '@angular/core';
import { LogoSliderComponent } from '../logo-slider/logo-slider.component';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  partners = [
    {
      imagePath: './assets/images/partners/Amuludun FM.png',
      description: 'Amuludun FM'
    },
    {
      imagePath: './assets/images/partners/Asido Foundation.png',
      description: 'Asido Foundation'
    },
    {
      imagePath: './assets/images/partners/Association Against Child, Sexual & Gender-Based Violence.jpg',
      description: 'Association Against Child, Sexual & Gender-Based Violence'
    },
    {
      imagePath: './assets/images/partners/Centre for Support of Women in Unpaid and Informal Employment in Nigeria.jpg',
      description: 'Centre for Support of Women in Unpaid and Informal Employment in Nigeria'
    },
    {
      imagePath: './assets/images/partners/DorcasGrace Community Initiative.png',
      description: 'DorcasGrace Community Initiative'
    },
    {
      imagePath: './assets/images/partners/HERLEAD NETWORK.jpg',
      description: 'HERLEAD NETWORK'
    },
    {
      imagePath: './assets/images/partners/JUSTICE, DEVELOPMENT AND PEACE COMMISSION.jpg',
      description: 'JUSTICE, DEVELOPMENT AND PEACE COMMISSION (JDPC)'
    },
    {
      imagePath: './assets/images/partners/ONELIFE INITIATIVE.jpg',
      description: 'ONELIFE INITIATIVE'
    },
    {
      imagePath: './assets/images/partners/Sarah Aderonke Oladimeji Memorial Foundation.png',
      description: 'Sarah Aderonke Oladimeji Memorial Foundation'
    },
    {
      imagePath: './assets/images/partners/Savingcross Justicepoint Foundation.png',
      description: 'Savingcross Justicepoint Foundation'
    },
  ]
}
