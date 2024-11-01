// hover-tooltip.directive.ts
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverTooltip]'
})
export class HoverTooltipDirective {
  private tooltip: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    // Create tooltip element
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText('Click to know more')
    );

    // Add styling to tooltip
    this.renderer.setStyle(this.tooltip, 'position', 'fixed');
    this.renderer.setStyle(this.tooltip, 'background-color', 'rgba(0, 0, 0, 0.8)');
    this.renderer.setStyle(this.tooltip, 'color', '#fff');
    this.renderer.setStyle(this.tooltip, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltip, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltip, 'font-size', '12px');
    this.renderer.setStyle(this.tooltip, 'white-space', 'nowrap');
    this.renderer.setStyle(this.tooltip, 'opacity', '0');
    this.renderer.setStyle(this.tooltip, 'transition', 'opacity 0.3s ease, visibility 0.3s ease');
    this.renderer.setStyle(this.tooltip, 'pointer-events', 'none');
    this.renderer.setStyle(this.tooltip, 'z-index', '1020');
    this.renderer.appendChild(document.body, this.tooltip);
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.tooltip) {
      const tooltipX = event.clientX + 15;
      const tooltipY = event.clientY + 15;

      this.renderer.setStyle(this.tooltip, 'left', `${tooltipX}px`);
      this.renderer.setStyle(this.tooltip, 'top', `${tooltipY}px`);
      this.renderer.setStyle(this.tooltip, 'opacity', '1');
      this.renderer.setStyle(this.tooltip, 'visibility', 'visible');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.renderer.setStyle(this.tooltip, 'opacity', '0');
      this.renderer.setStyle(this.tooltip, 'visibility', 'hidden');
      setTimeout(() => {
        if (this.tooltip) {
          this.renderer.removeChild(document.body, this.tooltip);
          this.tooltip = null;
        }
      }, 300); // Allow time for transition
    }
  }
}
