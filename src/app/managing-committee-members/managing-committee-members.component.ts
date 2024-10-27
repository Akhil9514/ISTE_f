import { ChangeDetectionStrategy, Component, signal,Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-managing-committee-members',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './managing-committee-members.component.html',
  styleUrl: './managing-committee-members.component.css'
})
export class ManagingCommitteeMembersComponent {

  readonly panelOpenState = signal(false);

  isExpanded: boolean[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  awards = [
    {
      title: '<strong> Andhra Pradesh (5)</strong>',
      description: 
      `
      <strong>Prof. Vijaya Bhaskar  Kurapati</strong><br>
      5-79-15/2 Flat No.102, Citadel Apartment<br>
      2/1 Ashok Nagar, Guntur – 522 002 (A.P.)<br>
      9440911161 (M)<br>

      <br>

      <strong>Prof. Eswara Reddy . B</strong><br>
      Professor<br>
      JNTUA College of Engineering<br>
      Ananthapuramu – 515 002 (A.P.)<br>
      9866937766 (M)<br>

      <br>

      <strong>Prof. J.V.N. Raju</strong><br>
      D.No.27-17-55/11C,Flat No.105<br>
      Lotus Regency © ASR Nagar<br>
      Bhimavaram – 534 202 (W.G Dist.) A.P.<br>
      9989928608 (m)<br>
      Email: jvnraju@gmail.com<br>
      (former Head, Construction Department)<br
      SRKR Engg. College, Bhimavaram – 534 202<br>

      <br>

      <strong>Dr. K. Delhi Babu</strong><br>
      Dean, Training & Placements<br>
      Sri Vidyaniketan Engineering College<br>
      Rangampet, Tirupathi – 517 102<br>
      Chittoor Dist. (A.P.)<br>
      9989928608 (m)<br>
      Email: kdb_babu@yahoo.com<br>

      <br>

      <strong>Dr. G. Nageswara Rao</strong><br>
      Professor, IT Department<br>
      AITAM, Tekkali – 532 201 (A.P.)<br>
      9440758550<br>
      Email : gnraoaitam@gmail.com<br>

      `
    },

    {
      title: '<strong> Assam & Eastern States (3)</strong>',
      description: 
      `
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>
      `
    },

    {
      title: '<strong> Bihar & Jharkhand (3)</strong>',
      description: 
      `
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>

      `
    },

    {
      title: '<strong> Chhattisgarh Section (3)</strong>',
      description: 
      `
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>
      `
    },

    {
      title: '<strong> Delhi Section (3)</strong>',
      description: 
      `
      <strong>Mrs. Amita Yadav</strong><br>
      Maharaja Surajmal Institute of Technology (MSIT)<br>
      C-4, Janakpuri<br>
      New Delhi  110058<br>
      9811861177 (M)<br>

      <br>

      <strong>Mrs. Savita Yadav</strong><br>
      Flat No.21, Type – IV, NSUT<br>
      Sector – 3, Dwarka<br>
      New Delhi – 110 078<br>
      9968077734 (M)<br>

      <br>

      <strong>Mrs. Shalu</strong><br>
      Maharaja Surajmal Institute of Technology (MSIT)<br>
      C-4, Janakpuri<br>
      New Delhi - 110058<br>
      9953074247 (M)<br>
      `
    },

    {
      title: '<strong> Gujarat (5)</strong>',
      description: 
      `
      <strong>Prof. Hardik V. Bhatt</strong><br>
      M.S. University Technology<br>
      Chapter Vadodara – 390 001 (Gujarat)<br>
      New Delhi  110058<br>
      9426386427 (M)<br>

      <br>

      <strong>Prof. Vishal Bhavsar</strong><br>
      M.S. University Technology<br>
      Chapter Vadodara – 390 001 (Gujarat)<br>
      9924418686 (M)<br>

      <br>

      <strong>Prof. Alefiya I. Kachwala</strong><br>
      402, Laxmi Villa Complex<br>
      100 Feet Road, Anand – 388 001 (Gujarat)<br>
      9428028552 (M)<br>

      <br>

      <strong>Prof. Ashutosh K. Patel</strong><br>
      Plot No.1290/1, Sector – 7/D<br>
      Near CH-3 Corner<br>
      Gandhinagar (Gujarat)<br>
      9825009719 (M)<br>

      <br>

      <strong>Prof. Shilpa Kathad</strong><br>
      Assistant Professor, Elect. Engg. Dept.<br>
      VVP Engineering College<br>
      Rajkot (Gujarat)<br>
      9979857677 (M)<br>
      Email : shilpakathad@yahoo.co.in<br>



      `
    },

    {
      title: '<strong> Haryana (3)</strong>',
      description: 
      `
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>
      `
    },

    {
      title: '<strong> Karnataka (5)</strong>',
      description: 
      `
      <strong>Prof. Narendra B.K.</strong><br>
      Principal<br>
      BGS Institute of Technology<br>
      B.G. Nagara, Mandya – 571 448<br>
      9880100556 (M)<br>

      <br>

      <strong>Prof. Lingaraj G. Vaidya</strong><br>
      SG lecturer, Dept. of E & E<br>
      B.V.V.S. Polytechnic<br>
      Bagalkot – 587 101 (Karnataka)<br>
      9739637496 (M)<br>
      Email : vaidya.lingaraj@gmail.com<br>

      <br>

      <strong>Prof. Sangmesh</strong><br>
      H.No.30, 1st Cross, GKW Layout<br>
      Vijayanagar, Bangalore – 560 040 (Karnataka)<br>
      9964311824 (M)<br>

      <br>

      <strong>Prof. Nijananda Reddy</strong><br>
      HNO. 4-4-401/85, Anusha Nagar<br>
      Mantralay Road,<br>
      Raichur – 584 103 (Karnataka)<br>
      09845351264 (M)<br>
      Email: nijanandareddy@gmail.com<br>

      <br>

      <strong>Prof. Shashank M. Gowda</strong><br>
      Assistant Professor, Dept. of ECE<br>
      Yenepoya Institute of Technology<br>
      Moodbidri – 574 225<br>
      9036524934 (M)<br>

      `
    },

    {
      title: '<strong> Kerala (5)</strong>',
      description: 
      `
      <strong>Dr. Sreejith . C.C.</strong><br>
      Prof. & Head, Dept. of Chemical Engineering<br>
      Saintgits College of Engineering<br>
      Kottukulam Hills, Pathamuttom,<br>
      Kottayam –  686532 (Kerala)<br>
      Email: hodme@saintgits.org, ccsreejith79@gmail.com<br>
      Mob: 09446321253<br>

      <br>

      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vaccant

      `
    },

    {
      title: '<strong> Madhya Pradesh (4)</strong>',
      description: 
      `
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vaccant
      `
    },

    {
      title: '<strong> Maharashtra & Goa (5)</strong>',
      description: 
      `
      
      <strong>Prof. Sameer Suresh Nanivadekar</strong><br>
      A-204, Hill Spring  Karesar<br>
      G.B. Road, Thane (W)<br>
      (Maharashtra)<br>
      7720982345 (M)<br>

      <br>

      <strong>Shri Vilas Shamrao Bugade</strong><br>
      Dept. of Electrical Engineering<br>
      Dr. D.Y. Patil Institute of Technology<br>
      Pimpri, Pune – 411 018 (Maharashtra)<br>
      9922841809 (M)<br>

      <br>

      <strong>Prof. Nimbalkar R B</strong><br>
      H.No. C-25, Engineering College Staff Quarters<br>
      Near Lontek Devi Mandir At: PO Loni<br>
      Ahmednagar – 413 736<br>
      9226887113 (M)<br>

      <br>

      <strong>Prof. Bhagwat Mahesh Madhav</strong><br>
      Sarthak, Middle Lane<br>
      At Post Devrukh,<br>
      Dist. Ratnagiri – 415 804 (Maharashtra)<br>
      9421228868  (M)<br>

      <br>

      <strong>Shri Vijay B. Sambrekar</strong><br>
      Ashirwad, Pujari Plot No.44<br>
      Vishrambag, Sangli (Maharashtra)<br>
      9823040506 (M)<br>

      `
    },

    {
      title: '<strong> Orissa (4)</strong>',
      description: 
      `
      <strong>Prof. Ispita Jena</strong><br>
      CVset, Chaitanya Prasad, Madanpur<br>
      Bhubaneswar – 752 054<br>
      Bhubaneswar – 751003<br>
      9776291567 (M)<br>

       <br>

      <strong>Shri Prabhat Kumar Singh</strong><br>
      SVSET, Chaitanya Prasad, Madanpur<br>
      Bhubaneswar – 752 054<br>
      9040634968 (M)<br>

      <br>

      <strong>Dr. Arun Kumar Patnaik</strong><br>
      N-2/126, IRC Village<br>
      Nayapalli, Bhubaneswar 751 015<br>
      9437044789 (M)<br>
      Email : arunpatnaik1954@gmail.com<br>



      <br>

      <strong>Prof. P.K. Satpathy</strong><br>
      Professor, Electrical Engg. Dept.<br>
      College of Engg. & Technology<br>
      Bhubaneswar (Orissa)<br>
      9823040506 (M)<br>
      Email : satpathy.pks@gmail.com<br>
      `
    },

    {
      title: '<strong> Puducherry (3)</strong>',
      description: 
      `
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>
      `
    },
    {
      title: '<strong> Punjab, Chandigarh, H.P. & J&K (4)</strong>',
      description: 
      `
      <strong>Prof. Rajat Joshi</strong><br>
      Rayat Bahra College of Engineering &<br>
      Nano Technology for Women<br>
      V.P.O. Bohan<br>
      Dist. Hoshiarpur – 146 001 (Punjab)<br>
      9888646401 (M)<br>

      <br>

      <strong>Prof. Surjit Kumar Gandhi</strong><br>
      27, Street No.8<br>
      Ferozpur Cantt – 152 001 (Punjab)<br>
      9888646401 (M)<br>
      Email : skgandhi21@gmail.com<br>

      <br>
      Vacant<br>
      <br>
      Vacant<br>

      `
    },

    {
      title: '<strong> Rajasthan (2)</strong>',
      description: 
      `
      <strong>Prof. Khushal Matai</strong><br>
      C/o Er. Daria Singh yadav<br>
      H.No.84, Umrao Nagar, RKH Banad Road<br>
      Jodhpur (Rajasthan)<br>
      9414404024 (M)<br>

      <br>

      <strong>Shri Ankur Singh</strong><br>
      106, Umrao Nagar<br>
      Banad Road, Jodhpur (Rajasthan)<br>
      8619088346 (M)<br>

      `
    },

    {
      title: '<strong> Tamil Nadu (5)</strong>',
      description: 
      `
      <strong>Prof. K. Senathipathi</strong><br>
      Thiagarajar Polytechnic College<br>
      Salem – 636 005 (T.N.)<br>

      <br>

      <strong>Prof. Devamani . C</strong><br>
      W/o C. Saravanan<br>
      70/31A – Narayanasamy Puram<br>
      Leigh Bazar, Salem – 636 009 (T.N.)<br>
      9443099759 (M)<br>

      <br>

      <strong>Mrs. K. Vidhya</strong><br>
      W/o Gunasekaran<br>
      5/57 Dhirthppagoundar Thotam<br>
      Rasipuram (Tk), Kailasampalaiyah<br>
      Vadugam, Namakkal – 637 407 (T.N.)<br>
      9842022047 (M)<br>

      <br>

      <strong>Prof. Lal Raja Singh R.</strong><br>
      (Prof. & HOD, Dept. of EEE<br>
      Marthandam College of Engg. & Tech.)<br>
      Rani Illam, Karavilai<br>
      Nattalam Post, Kanyakumari Dist. (T.N.)<br>
      9443371311 (M)<br>

      <br>

      <strong>Dr. B.L. Sivakumar</strong><br>
      Principal and Secretary<br>
      School of Management<br>
      Sri Ramakrishna College of Arts and Science<br>
      Coimbatore<br>

      `
    },

    {
      title: '<strong> Telangana (5)</strong>',
      description: 
      `
      <strong>Shri C. Radha Charan</strong><br>
      Assistant Professor, Dept. of EEE<br>
      JNTUH College of Engineering<br>
      Jagitial, Hyderabad<br>
      9701352066 (M)<br>
      Email : crcharan@gmail.com<br>

      <br>

      <strong>Ch. V. Krishna Rao (LM-29585)</strong><br>
      Principal<br>
      SGM Government Polytechnic<br>
      Abdullapurmet – 501 505<br>
      Ranga Reddy Dist., Telangana<br>

      <br>

      <strong>Dr. A. Srinivasula Reddy (LM-39013)</strong><br>
      Principal<br>
      CMR Engineering College<br>
      Survey No.61, Medchal Road<br>
      Medchal, Hyderabad – 501 401<br>
      Telangana<br>
      8008135345 (M)<br>

      <br>

      <strong>Dr. P. Chandra Sekhar</strong><br>
      H.No. 9-2-6/1, Shanthinagar<br>
      Bhadrachalam – 507 111<br>
      Bhadradri Kothagudem Dist.<br>
      Telangana<br>

      <br>

      <strong>Prof. I. Sarath Chandra (LM-78804)</strong><br>
      Flat No.403, Maram GL Heavens 2<br>
      Road No.5, Central Bank Colony<br>
      Chinthalakunta Check Post<br>
      L.B. Nagar, Hyderabad – 500 075<br>
      Telangana<br>
      9885391926 (M)<br>

      `
    },

    {
      title: '<strong> Uttar Pradesh & Uttaranchal (4)</strong>',
      description: 
      `
      <strong>Dr. Neelendra Badal (LM-33105)</strong><br>
      Director<br>
      Rajkeeya Engineering College<br>
      Bijnor (U.P.)<br>

      <br>
      Vacant<br>
      <br>
      Vacant<br>
      <br>
      Vacant<br>

 
      `
    },

    {
      title: '<strong> West Bengal (3)</strong>',
      description: 
      `
      <strong>Prof. Jyoti Sekhar Banerjee</strong><br>
      Mukrejee Para, Barasut, 24th Pgs (N)<br>
      Kolkata – 700 124 (W.B.)<br>
      (M) 9830233172<br>
      Email: tojyoti2001@yahoo.co.in<br>

      <br>

      <strong>Prof. Sibasis Bandyopadhyay</strong><br>
      Technique Polytechnic Institute<br>
      Hooghly – 712102<br>
      (West Bengal)<br>
      8910833192 (M)<br>

      <br>

      Vacant


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
