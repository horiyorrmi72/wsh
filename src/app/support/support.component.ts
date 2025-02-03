import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  supports = [
    {
      title: 'Listen Without Judgment',
      description: 'Let the survivor share their story at their own pace. Avoid blaming or questioning their decisions.'
    },
    {
      title: 'Believe Them',
      description: 'Believe their experience and affirm their courage in sharing it. Validation is a critical step in their healing.'
    },
    {
      title: 'Encourage Professional Help',
      description: 'Suggest connecting with counselors, support groups, or organizations that specialize in helping survivors.'
    },
    {
      title: 'Respect Their Privacy',
      description: 'Keep their story confidential unless they explicitly ask you to share it for their benefit.'
    },
    {
      title: 'Offer Practical Support',
      description: 'Help with day-to-day needs like transportation, childcare, or finding a safe space, if they ask for it.'
    },
    {
      title: 'Stay Patient',
      description: 'Healing takes time. Be patient and continue to offer support without pressuring them.'
    },
  ]

}
