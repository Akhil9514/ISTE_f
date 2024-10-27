import { ChangeDetectionStrategy, Component, signal,Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-chairmen',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-chairmen.component.html',
  styleUrl: './section-chairmen.component.css'
})
export class SectionChairmenComponent {

  readonly panelOpenState = signal(false);

  isExpanded: boolean[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  awards = [
    {
      title: '<strong> Andhra Pradesh</strong>',
      description: 
      `
      <strong>Prof. G.Ranga Janardhana</strong><br>
      Vice Chancellor<br>
      Jawaharlal Nehru Technological University, Anantapur,<br>
      Ananthapuramu – 515 002, Andhra Pradesh<br>
      Mobile : 9440151031, 8701572555br>
      Email : rangajanardhana.g@jntua.ac.in<br>
      `
    },

    {
      title: '<strong> Assam & Eastern States</strong>',
      description: 
      `
      <strong>Prof. Tanmai Das</strong><br>
      Assam Textile Institute<br>
      GNB Road, Ambari<br>
      Guwahati – 781 001<br>
      Vallabh Vidyanagar<br>
      9435190162 (M)<br>
      Email :tanmaidas@yahoo.com<br>
      `
    },

    {
      title: '<strong> Bihar & Jharkhand</strong>',
      description: 
      `
      Vacant<br>

      `
    },

    {
      title: '<strong> Chhattisgarh Section</strong>',
      description: 
      `
      <strong>Prof. P.B. Deshmukh</strong><br>
      Director<br>
      Shri Shankaracharya Group of Institutions<br>
      Junwani, Bhilai – 490 020 (Chhattisgarh)<br>
      9893369869 (M)<br>
      M : 9443208133<br>
      Email : pbdeshmukh@yahoo.com<br>
      `
    },

    {
      title: '<strong> Delhi</strong>',
      description: 
      `
      <strong>Prof. Jawed Ahmed</strong><br>
      Assistant Professor<br>
      Dept. of Computer Science Engg.<br>
      Jamia Hamdard  (Deemed University)<br>
      Mehrauli-Badarpur Road<br>
      Hamdard Nagar, New Delhi – 110 062<br>
      9999340986 (M)<br>
      Email: jawed2047@gmail.com<br>
      `
    },

    {
      title: '<strong> Gujarat Section</strong>',
      description: 
      `
      <strong>Dr. Sachin Parikh</strong><br>
      Professor  & Head, Chemical Engg. Dept.<br>
      L.D. College of Engineering<br>
      Ahmedabad (Gujarat)<br>
      09925611525 (M)<br>
      Email : sachinparikh@hotmail.com<br>
      `
    },

    {
      title: '<strong> Haryana</strong>',
      description: 
      `
      <strong>Dr. Devender Singh Mor</strong><br>
      (Chairman, ISTE Haryana Section)<br>
      Director-Principal<br>
      Chaudhary Ranbir Singh State Instt. of Engg. & Technology<br>
      Opp. Sehwag International School, <br>
      Silani Kesho Jajjar  – 124 103(Haryana)<br>
      09416012060 (M)<br>
      Email : drdsmor@gmail.com<br>
      `
    },

    {
      title: '<strong> Karnataka</strong>',
      description: 
      `
      <strong>Prof.  Suresh D.S.</strong><br>
      Director<br>
      Channabasaveshwara Institute of Technology<br>
      Gubbi – 572 216 Dist. Tumkur (Karnataka)<br>
      9686550488 (M)<br>
      Email : sureshtumkur@yahoo.co.in<br>
      `
    },

    {
      title: '<strong> Kerala</strong>',
      description: 
      `
      <strong>Dr.K.Vijayakumar</strong><br>
      Avittom,Maithri Nagar,<br>
      Evannur,Thrissur-680 008, Kerala,<br>
      Ph:0487 2969835(Res).,9446419835<br>
      `
    },

    {
      title: '<strong> Madhya Pradesh</strong>',
      description: 
      `
      <strong>Dr. Rajnikant Jain</strong><br>
      Former Additional Secretary <br>
      Department of Technical Education and Skill Development<br>
      Government of MP, Bhopal – 572 216<br>
      `
    },

    {
      title: '<strong> Maharashtra & Goa</strong>',
      description: 
      `
      <strong>Dr.  Ranjit  Krishnarao  Sawant</strong><br>
      Plot No.418, R.K. Nagar Society No.6<br>
      Pachgaon  Road<br>
      Kolhapur – 416 013  (Maharashtra)<br>
      09822878804 (M)<br>
      Email : ranjitsawant@yahoo.com<br>
      `
    },

    {
      title: '<strong> Orissa</strong>',
      description: 
      `
      <strong>Prof. Pravat Kumar Parhi</strong><br>
      Prof. & HOD, Civil Engg. Dept.<br>
      College of Engineering & Technology<br>
      Bhubaneswar – 751003<br>
      9437176889 (M)<br>
      Email : pkparhi@yahoo.com<br>
      `
    },

    {
      title: '<strong> Puducherry</strong>',
      description: 
      `
      <strong>Prof. Vijayakrishna Rapaka . E</strong><br>
      No.3A, Rajiv Gandhi Nagar<br>
      1st Cross Street, Brindavanan, Puducherry<br>
      9367600780 (M)<br>
      `
    },
    {
      title: '<strong> Punjab, Chandigarh, H.P. & J&K</strong>',
      description: 
      `
      <strong>Dr. Rupinder Pal Singh Suker-Chakia</strong><br>
      02, Sunil Park<br>
      Opp. Westend Mall, P.O. Rajguru Nagar<br>
      Ferozepur Road, Ludhiana – 141 012<br>
      9888178881 (M)<br>
      Email : rupindersukerchakia@gmail.<br>>
      `
    },

    {
      title: '<strong> Rajasthan</strong>',
      description: 
      `
      <strong>Prof. Mrs. Ashu Dehadani</strong><br>
      83, Umaro Nagar, Kh No. 88/Nandari<br>
      Saraswati Vidyapeeth, Ramzan Ka Hatha<br>
      Banad Road, Jodhpur (Rajasthan)<br>
      9414189499 (M)<br>
      `
    },

    {
      title: '<strong> Tamil Nadu</strong>',
      description: 
      `
      <strong>Dr. A. Sankara Subramanian</strong><br>
      Principal<br>
      GRG Polytechnic College<br>
      Kuppeppalayam, S.S. Kulam P.O.<br>
      Coimbatore – 641107<br>
      Phone : 0422-2929090, 2929091<br>
      Fax : 0422-2654323, 09994965528, 9443477578 (M)<br>
      Email :principal@grgpolytech.com<br>
      `
    },

    {
      title: '<strong> Telangana</strong>',
      description: 
      `
      <strong>Prof. Katta Narasimha Reddy</strong><br>
      Vice Chancellor<br>
      Jawaharlal Nehru Technological University<br>
      Hyderabad<br>
      `
    },

    {
      title: '<strong> Uttar Pradesh & Uttaranchal</strong>',
      description: 
      `
      <strong>Dr. Anil Kumar Solanki</strong><br>
      Head, Computer Science Engg. Dept.<br>
      Bundelkhand Institute of Engineering & Tech.<br>
      Kanpur Road,  Jhansi – 284 128 (U.P.)<br>
      0121-2439019, 2439057, 2439058 (F)<br>
      09415060081, 09760476088(M)<br>
      Email :solankibiet13@gmail.com<br>
      `
    },

    {
      title: '<strong> West Bengal</strong>',
      description: 
      `
      <strong>Prof (Dr) Sudip Kumar Roy</strong><br>
      Dean (Academics) and<br>
      Professor of Civil Engineering Department,<br>
      Indian Institute of Engineering Science and Technology (IIEST)<br>
      Shibpur, Howrah – 711103<br>
      (M) 9830233172<br>
      Email :sudip.civil@faculty.iiests.ac.in<br>
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
