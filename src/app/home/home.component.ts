import { Component,ViewChild, HostListener    } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule here

import { HomePresidentSectionComponent } from '../home-president-section/home-president-section.component';
import { HomeAcademicProgramsComponent } from '../home-academic-programs/home-academic-programs.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CommonModule,
    HomePresidentSectionComponent,
    HomeAcademicProgramsComponent,
    RouterModule,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  image: string = 'path/to/your/image.jpg'; // Change this to your image path
  
  heading: string = 'Your Heading Here';
  listItems: string[] = []; 

  currentIndex: number = 0;
  showCard: boolean = false;
  buttonText: string = '';



  setData(dataType: number) {

    switch(dataType) {
      case 0:
        this.image = 'path/to/image1.jpg';
        this.heading = 'Heading for Image 1';
        this.listItems = ['Item 1', 'Item 2', 'Item 3']; // Variable number of items
        break;
      case 1:
        this.image = 'path/to/image2.jpg';
        this.heading = 'Heading for Image 2';
        this.listItems = ['Item A', 'Item B']; // Different number of items
        break;
      case 2:
        this.image = 'path/to/image3.jpg';
        this.heading = 'Heading for Image 3';
        this.listItems = ['Single Item']; // Just one item
        break;
      default:
        // Default data
        this.image = 'path/to/default/image.jpg';
        this.heading = 'Default Heading';
        this.listItems = [];
        break;
    }
  }





  isActive = false;


  // image: string = '';
  // heading: string = '';
  // subtitle: string = '';
  // content: string = '';
  
  
  // 



  
// • 

  cardDataArray = [
    {
      heading: 'About',
      listItems: [

        'Dr. Pratapsinh Kakasaheb Desai completed his PhD from Shivaji University, Kolhapur. He has completed Master’s Degree in Mechanical Engineering and Master of Business Administration. He is the son of Shri. Krantiveer Kakasaheb Desai the most sought freedom fighter. The Desai family rendered five freedom fighters to nation and he was raised with strong values and principles. He has a prominent background of Social Reforms, Patriotism and Education.', 

        'Dr. Pratapsinh Kakasaheb Desai is working on design and development of femur bone prosthesis research. He delivered key note addresses in India and abroad in conferences. Especially his deliberation on opulent Indian Education and its history is Highly Revered. He has Numerous National and International Research Papers to his credit.', 

        'Dr. Pratapsinh Kakasaheb Desai has actively participated as member of All India Federation for Polytechnic Teachers Association. During his tenure in various organizations, he was Instrumental in advocating the issue of granting pay band-4 to all Engineering and Polytechnic Colleges. Currently he is working on salaries to be paid by State Government to self-financed Engineering Institutes. He is a member of various committees and task teams constituted by government of Maharashtra.'
      ],
      buttonText: 'Positions Held',
    },
    {
      heading: 'Position Held',
      listItems: [
        'Dr. Pratapsinh Kakasaheb Desai attended and participated as member of Indian delegation on various International meets such as World Engineering Education Forum (WEEF), International Federation of Engineering Education Societies (IFEES), Global Engineering Dean’s Council (GEDC) in Countries like US, Canada, England, France, Germany, Argentina, Brazil, China, Japan, Dubai, Australia & Korea.', 
        
        'Dr. Pratapsinh Kakasaheb Desai is youngest ever President of the prestigious organization ISTE, New Delhi, Past Vice President of ISTE, New Delhi, ISTE Executive Council Member for two terms', 
        
        'Member representing India in Global Deans Council.',

        'Chairman, Indian Engineering Dean’s Council.',

        'Member of Governing Council, Engineering Staff College of India.',

        'He is a Council Member of All India Council for Technical Education.',

        'Member   of   the   Advisory   Committee   for   the   Overall   Curriculum Development Cell, IIT, New Delhi.',

        'Convener, Maharashtra State Technical Teachers Association.',

      ],
      buttonText: 'Internationalization',
    },
    {
      heading: 'Internationalization',
      listItems: [
        'Invited by Africa Asia Scholars Global Network (AASGON) England. Sanitary to United Nation Global compact and member of European Alliance for innovation. To deliver Keynote Address at Joint program of Kent University, University of Greenwich, University of Creative arts and Christ Church, hosted by AASGON in Dec. 2016.',
        
        'President, Mouni Vidyapeeth Staff Association.', 
        
        'Invited to deliver Special Address at University of AMBO- Ethiopia.',

        'Visited almost 35 prominent universities in the world to studied a technical education scenario in the world.',

        'Addressed conference on Diversity in Technical Education at Chicago, US.',

        'Visited more than 30 countries to study. The Technical Education Scenario around the Globe.',

        'Strategic partner in conduct of FIMAAFEST an International fest on Film, Music & Art to be conducted at IIT Delhi.',

        'Initiated ISTE-AICTE Faculty Development Program FDPS, and received Grant Rs. 4.5 Crores in this year.',
      ],
      buttonText: 'About',
    },
  ];


  fillCardData(index: number) {
    const data = this.cardDataArray[index];
    this.heading = data.heading;
    this.listItems = data.listItems;
    this.buttonText = data.buttonText;
    this.showCard = true; 
  }

  ngOnInit(): void {
    this.fillCardData(0); // Load the first card data by default
    // this.setData(this.currentIndex);
  }

    goToNextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.cardDataArray.length; // Loop to first card when reaching the end
    this.fillCardData(this.currentIndex);
    console.log(this.currentIndex);
    // this.setData(this.currentIndex);
  }




  constructor() {
    
  }


  // Toggle active state on click
  toggleActive(event: Event): void {
    event.stopPropagation(); // Prevent the document click event from firing on this element
    this.isActive = !this.isActive;
  }


  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: EventTarget): void {
    const clickedInside = (targetElement as HTMLElement).closest('.color-chage');
    if (!clickedInside) {
      this.isActive = false;
    }
  }

  

}
