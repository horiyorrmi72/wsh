import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teams = [
    {
      name: 'Dr. Otonye Bille',
      imagePath: './assets/images/teams/Dr_Otonye_Bille.jpg',
      designation: 'Directors',
      description: 'Board Chairperson'
    },
    {
      name: 'Rev. Niyi Dahunsi',
      imagePath: './assets/images/teams/Rev_Niyi_Dahunsi.jpg',
      designation: 'Directors',
      description: 'Board Vice-Chairperson'
    },
    {
      name: 'Dr Omowumi Okedare',
      imagePath: './assets/images/teams/Dr Omowumi Okedare.png',
      designation: 'Directors',
      description: 'Board member'
    },
    {
      name: 'Wuraoluwa Ayodele',
      imagePath: './assets/images/teams/Wuraoluwa Ayodele.png',
      designation: 'Directors',
      description: 'Board member'
    },
    {
      name: 'Folake Ajayi Esq',
      imagePath: './assets/images/teams/Folake Ajayi Esq.jpg',
      designation: 'Directors',
      description: 'Board member'
    },
    {
      name: 'Wuraoluwa Ayodele',
      imagePath: './assets/images/teams/Wuraoluwa Ayodele.png',
      designation: 'Staff',
      description: 'Executive Director'
    },
    {
      name: 'Dr Omowumi Okedare',
      imagePath: './assets/images/teams/Dr Omowumi Okedare.png',
      designation: 'Staff',
      description: 'Program Manager'
    },
    {
      name: 'Omobawumi Ebube Ayodele',
      imagePath: './assets/images/teams/Omobawumi Ebube Ayodele.jpg',
      designation: 'Staff',
      description: 'Assistant Program Manager'
    },
    {
      name: 'Oluwaseun Akintola',
      imagePath: './assets/images/teams/Oluwaseun Akintola.jpg',
      designation: 'Staff',
      description: 'Program Officer'
    },
    {
      name: 'Oluwayemisi Emmanuel',
      imagePath: './assets/images/teams/Oluwayemisi Emmanuel.png',
      designation: 'Staff',
      description: 'Women’s Shelter Coordinator'
    },
  ]
  directors = this.teams.filter(team => team.designation === 'Directors');
  staff = this.teams.filter(team => team.designation === 'Staff');
}
