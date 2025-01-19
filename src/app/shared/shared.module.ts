import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeOnScrollDirective } from '../directives/fadeOnScroll.directive';

@NgModule({
  declarations: [FadeOnScrollDirective],
  exports: [FadeOnScrollDirective],
  imports: [CommonModule],
})
export class SharedModule { }
