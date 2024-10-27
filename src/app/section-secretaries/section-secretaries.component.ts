import { ChangeDetectionStrategy, Component, signal,Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-secretaries',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-secretaries.component.html',
  styleUrl: './section-secretaries.component.css'
})
export class SectionSecretariesComponent {

  readonly panelOpenState = signal(false);

  isExpanded: boolean[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  awards = [
    {
      title: '<strong> Andhra Pradesh</strong>',
      description: 
      `
      <strong>Prof. Eswara Reddy B.</strong><br>
      Hon. Secretary cum treasurer<br>
      ISTE Andhra Pradesh Section<br>
      JNTUA College of Engineering<br>
      Ananthapuramu – 515 002<br>
      M : 9866937766<br>
      `
    },

    {
      title: '<strong> Gujrat</strong>',
      description: 
      `
      <strong>Prof. Bhasker Vijaykumar Bhatt</strong><br>
      Hon. Secretary cum treasurer<br>
      ISTE Gujarat Section<br>
      Associate Professor, APIED,<br>
      Vallabh Vidyanagar<br>
      M : 98258-35364<br>
      Email : istegujsecretary@gmail.com; istegujchair@gmail.com<br>
      `
    },

    {
      title: '<strong> Orissa</strong>',
      description: 
      `
      <strong>Dr. K.K. Rout</strong><br>
      Principal<br>
      N.M. Institute of Engg. & Technology<br>
      Sijua, Patrapada<br>
      Bhubaneswar – 751 019 (Odisha)<br>
      `
    },

    {
      title: '<strong> Tamil Nadu</strong>',
      description: 
      `
      <strong>Prof. K. Sourirajan</strong><br>
      Hon. Secretary cum treasurer<br>
      ISTE Tamil Nadu Section<br>
      2/6 North Street<br>
      Virudhunagar – 626 003<br>
      M : 9443208133<br>
      Email : mksrajajan2k6@yahoo.co.in<br>
      `
    },

    {
      title: '<strong> Telangana</strong>',
      description: 
      `
      <strong>Prof. A.V.S.S. Kumara Swami Gupta</strong><br>
      Secretary-Cum-Treasurer TS<br>
      JNTUH College of Engineering<br>
      Hyderabad – 500085<br>
      Email : avs_gupta@jntuh.ac.in<br>
      M : 9849427331<br>
      `
    },

    {
      title: '<strong> West Bengal</strong>',
      description: 
      `
      <strong>Prof Jyoti Sekhar Banerjee</strong><br>
      (Secretary-cum-Treasurer)<br>
      Asst. Professor, Dept. of E.C.E,<br>
      Bengal Institute of Technology,<br>
      Kolkata, West Bengal<br>
      Email : jyotisekhar.banerjee@bitcollege.in, tojyoti2001@yahoo.co.in<br>
      Tel:+916292219054<br>
      Cell:+91 9830018727, 9477375794<br>
      `
    },
    

  ];
  

  toggleExpand(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];

    if (this.isExpanded[index]) {
      this.applyStylesToLinks(index);
    }
  }


  applyStylesToLinks(index: number) {
    const descriptionContainer = this.el.nativeElement.querySelectorAll('.award-description')[index];

    if (descriptionContainer) {
      const downloadLinks: NodeListOf<HTMLElement> = descriptionContainer.querySelectorAll('.linked-text');
      downloadLinks.forEach((link: HTMLElement) => {

        this.renderer.setStyle(link, 'cursor', 'pointer');

        // Set CSS styles using Renderer2
        this.renderer.setStyle(link, 'textDecoration', 'none'); // Equivalent to .linked-text
        this.renderer.setStyle(link, 'color', '#7A7A7A'); // Default color

        // Set hover styles using mouseenter and mouseleave events
        this.renderer.listen(link, 'mouseenter', () => {
          this.renderer.setStyle(link, 'color', '#1AB69D'); // Change color on hover
          this.renderer.setStyle(link, 'transform', 'scale(1.05)'); // Scale on hover
        });

        this.renderer.listen(link, 'mouseleave', () => {
          this.renderer.setStyle(link, 'color', '#7A7A7A'); // Revert color
          this.renderer.setStyle(link, 'transform', 'scale(1)'); // Revert scale
        });
      });
    }
  }

  downloadForm(event: Event) {
    event.stopPropagation(); // Prevents the click from propagating to the parent paragraph
    console.log("Download form clicked");
    // Here you can add logic to handle the download
  }

  viewAwardDetails(event: Event) {
    event.stopPropagation(); // Prevents the click from propagating to the parent paragraph
    console.log("View award details clicked");
    // Here you can add logic to view award details
  }

}
