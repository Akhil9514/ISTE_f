import { ChangeDetectionStrategy, Component, signal,Renderer2, ElementRef } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-awards',
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './student-awards.component.html',
  styleUrl: './student-awards.component.css'
})
export class StudentAwardsComponent {


  readonly panelOpenState = signal(false);

  isExpanded: boolean[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  awards = [
    {
      title: 'Kerala Government Engineering Design National Award instituted by the Government of Kerala during the XV Annual Convention of ISTE held at Thiruvananthapuram in December 1985. This Award is meant to promote and encourage creativity, innovation and design talents in engineering degree students.',
      description: `<strong>Eligibility:</strong> Any student in engineering or technology who is studying in an institution during this year or who is completing the degree course at any time during this year is eligible to compete for the award. Only FIRST DEGREE (no post graduate) students are eligible. Try individually or in groups of TWO only. 
      <strong><span class="linked-text download-form" (click)="downloadForm()">DOWNLOAD FORM</span></strong> 
      <strong><span class="linked-text award-details" (click)="viewAwardDetails()">AWARD DETAILS</span></strong>`
    },
    {
      title: 'NIT, Kozhikode National Award for the Best B.Tech. Project from Engineering Colleges instituted by National Institute of Technology, Kozhikode to promote research in the areas of :',
      description: `
      – Civil & Architecture Engineering – Mechanical & Production Engineering – Electrical & Electronics Engineering – Computer & Communication Engineering Eligibility : 
      Students undergoing under-graduate programmes leading to B.E./B.Tech. degree in any Engineering Institution in India including the IITs, NITs, State Level Engineering Colleges, 
      University Colleges and Engineering Dept. of Universities. Award Details : Cash Prize Rs.2000/- each for the above four disciplines, Medallion and Certificates. 
      <strong><span class="linked-text download-form" (click)="downloadForm()">DOWNLOAD FORM</span></strong> 
      <strong><span class="linked-text award-details" (click)="viewAwardDetails()">AWARD DETAILS</span></strong>
      `
    },
    {
      title: 'Baba Banda Singh Bahadur Engineering College National Award for the Best B.Tech. Project related to Sustainable Development from Engineering Colleges announced by Sardar Prakash Singh Badal, former Chief Minister, Punjab and instituted by the Management of Baba Banda Singh Bahadur Engineering College, Fatehgarh Sahib, Punjab during 8th National Students Convention of ISTE during October 2005 to promote research in sustainable development in the area of :',
      description: `
      • Civil Engineering & Architecture<br>
      • Mechanical Engineering & Production Engineering<br>
      • Electrical Engineering & Electronics<br>
      • Computers & Communication Engineering<br>
      • Information Technology & Management<br>
      • Agricultural Engineering<br>

      <br>

      <strong>Eligibility</strong> : Final year students undergoing under-graduate programmes leading to B.E./B.Tech. 
      Degree in any engineering institution in any of the above discipline in India including the IITs, 
      NITs, State Level Engineering Colleges, University Award Details : Cash Prize Rs.2000/- each for 
      the above six disciplines, Medallion and Certificates. 
      <strong><span class="linked-text download-form" (click)="downloadForm()">DOWNLOAD FORM</span></strong> 
      <strong><span class="linked-text award-details" (click)="viewAwardDetails()">AWARD DETAILS</span></strong>
      `
    },

    {
      title: 'Devinder Singh Bansal Memorial Award for Best B.Tech. Project in Mechanical Engineering and Allied Branches in the State of Punjab instituted by Mrs. Anup Kaur Bansal and Dr. A.S. Bansal donated a sum of Rs.1 lakh to ISTE to Institute a State Level Award in the area of Mechanical Engineering and Allied Branches (it includes Mechanical Engg., Production Engg., Automobile Engg., Industrial Engg., Agricultural Engg. and Farm Machinery) in the memory of their late son Shri Devinder Singh Bansal.',
      description: `<strong>Eligibility:</strong> 
      Students undergoing under-graduate programmes leading to B.E./B.Tech. 
      Degree in Mechanical 
      Engineering and Allied Branches in any Engineering College in Punjab. 
      The Award consists of a Cash Prize of Rs.7000, a Medallion, and a Citation. 
      <strong><span class="linked-text download-form" (click)="downloadForm()">DOWNLOAD FORM</span></strong> 
      <strong><span class="linked-text award-details" (click)="viewAwardDetails()">AWARD DETAILS</span></strong>`
    },

    {
      title: 'ISTE-NARSEE MONJEE Award for Best Project work done by Polytechnic Students in Maharashtra State instituted by The Narsee-Monjee Educational Trust, Mumbai for Final Year students of Polytechnics for their Project Work.',
      description: `<strong>Eligibility:</strong> 
      Final Year Diploma students in Maharashtra State graduating in B.T.E. 
      approved Diploma Courses in Engineering/Technology/Architecture/ Pharmacy 
      can apply through their Polytechnics. Both Group Projects and Individual 
      Projects will be acceptable. However, the Group size should not exceed 4 
      STUDENTS. Selection of Award : A Panel of Judges consisting of representatives of DTE, 
      ISTE and Narsee-Monjee Trust will select the Best, Second Best and Third Best Projects. 
      Award Details :  Cash Prize (Rs.2500/- for First, Rs.1500/- for Second and Rs.1000/- for Third), 
      a Medallion and a Certificate. Interested students write a good report of their project work, 
      recommended through Head of the institution and submit ONE COPY to : <strong>The Vice Chancellor</strong> Narsee-Monjee 
      Institute of Management & Higher Studies (Deemed University), Vile Parle (West), Mumbai – 400 056, Maharashtra
      <strong><span class="linked-text download-form" (click)="downloadForm()">DOWNLOAD FORM</span></strong> 
      <strong><span class="linked-text award-details" (click)="viewAwardDetails()">AWARD DETAILS</span></strong>`
    },

    {
      title: 'Maharashtra State Engineering Design Award for Engineering Students (Degree Level) instituted by the Government of Maharashtra to promote and encourage creativity, innovation and design talents in engineering degree students.',
      description: `<strong>Eligibility:</strong> 
      Any student in engineering or technology who is studying in an institution 
      in Maharashtra State during this year or who is completing the degree 
      course at any time during this year is eligible to compete for the award. 
      Only FIRST DEGREE (no post graduate) students are eligible. Try individually 
      or in group of TWO only. Award Details : Cash Prize (Rs.3000/- for First,    
      Rs.2000/- for Second) a Medallion and Certificates to winners. In case two 
      students work on a project and get the award, the cash prize will be shared between the two, 
      certificates will be given to both, but the medallion will be given to the leader of the group only.
      <strong><span class="linked-text download-form" (click)="downloadForm()">DOWNLOAD FORM</span></strong> 
      <strong><span class="linked-text award-details" (click)="viewAwardDetails()">AWARD DETAILS</span></strong>`
    },
    {
      title: 'Punjab Technical University Award for Young Engineer Innovators for the Best B.Tech. Projects by the students of Engineering Colleges affiliated to Punjab Technical University in the Punjab State. The Award was instituted by Punjab Technical University by donating a sum of Rs.11 lakhs to encourage the students and to stimulate the spirit of inventiveness among the technical students in order to honour and recognize their creative talent with a mission to harness their performance for the benefit of society and the nation in the following disciplines:',
      description: `
      • Civil Engineering & Architecture<br>
      • Mechanical, Production Engineering, Industrial Engineering and Automobiles etc.<br>
      • Electrical Engineering & Electronics<br>
      • Computers and Communication Engineering & Information Technology<br>
      • Chemical Engineering, Bio-Technology & Food Technology etc.<br>

      <br>

      <strong>Eligibility</strong> : 
      Final year students of the above branches undergoing under-graduate programmes leading to B.E./B.Tech. 
      Degree in the institution affiliated to Punjab Technical University including the NITs, University-Colleges, 
      Engineering Depts., Engineering & Technology Colleges etc. Award Details : Cash Prize, Medallion and a Citation.
      <strong><span class="linked-text download-form" (click)="downloadForm()">DOWNLOAD FORM</span></strong> 
      <strong><span class="linked-text award-details" (click)="viewAwardDetails()">AWARD DETAILS</span></strong>
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
