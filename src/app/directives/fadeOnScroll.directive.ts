import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[fadeOnScroll]',
})
export class FadeOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() threshold: number = 0.6;
  @Input() rootMargin: string = '0px';
  @Input() animationClass: string = 'fade-in';

  private _observer: IntersectionObserver | null = null;

  constructor(private _element: ElementRef, private _renderer: Renderer2) { }

  ngAfterViewInit() {
    this._renderer.addClass(this._element.nativeElement, 'opacity-0');

    const options = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    this._observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._renderer.removeClass(this._element.nativeElement, 'opacity-0');
          this._renderer.addClass(this._element.nativeElement, this.animationClass);
          this._observer?.disconnect(); 
        }
      });
    }, options);

    this._observer.observe(this._element.nativeElement);
  }

  ngOnDestroy() {
    this._observer?.disconnect();
  }
}
