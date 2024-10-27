import { Component, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-president-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-president-section.component.html',
  styleUrl: './home-president-section.component.css'
})
export class HomePresidentSectionComponent implements AfterViewInit {


  tags: string[] = ['HTML', 'CSS', 'JS', 'SSG', 'webdev', 'animation', 'UI/UX'];
  images: string[] = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
    'https://i.pravatar.cc/150?img=6'
  ];

   // Define cards with titles and descriptions instead of images
   cards: { title: string; description: string }[] = [
    { title: 'Card 1', description: '' },
    { title: 'Card 2', description: 'Dr. Pratapsinh Kakasaheb Desai completed his PhD from Shivaji University, Kolhapur.' },
    { title: 'Card 3', description: 'Description for card 3' },
    { title: 'Card 4', description: 'Description for card 4' },
    { title: 'Card 5', description: 'Description for card 5' },
    { title: 'Card 6', description: 'Description for card 6' },
    { title: 'Card 7', description: 'Description for card 6' },
    { title: 'Card 8', description: 'Description for card 6' },
    { title: 'Card 9', description: 'Description for card 6' },
  ];


  cardsSet1: { title: string; description: string }[] = [
    { title: 'Card 1.1', description: 'Dr. Pratapsinh Kakasaheb Desai completed his PhD from Shivaji University, Kolhapur.' },
    { title: 'Card 1.2', description: 'He has completed Master’s Degree in Mechanical Engineering and Master of Business Administration.' },
    { title: 'Card 1.3', description: 'He is the son of Shri. Krantiveer Kakasaheb Desai the most sought freedom fighter.' },
    { title: 'Card 1.4', description: 'The Desai family rendered five freedom fighters to nation and he was raised with strong values and principles.' },
    { title: 'Card 1.4', description: 'He has a prominent background of Social Reforms, Patriotism and Education.' },

    { title: 'Card 1.4', description: 'Dr. Pratapsinh Kakasaheb Desai is working on design and development of femur bone prosthesis research. ' },
    { title: 'Card 1.4', description: 'He delivered key note addresses in India and abroad in conferences.' },
    { title: 'Card 1.4', description: 'Especially his deliberation on opulent Indian Education and its history is Highly Revered. ' },
    { title: 'Card 1.4', description: 'He has Numerous National and International Research Papers to his credit. ' },

    { title: 'Card 1.4', description: 'Dr. Pratapsinh Kakasaheb Desai has actively participated as member of All India Federation for Polytechnic Teachers Association.' },
    { title: 'Card 1.4', description: 'During his tenure in various organizations, he was Instrumental in advocating the issue of granting pay band-4 ' },
    { title: 'Card 1.4', description: 'to all Engineering and Polytechnic Colleges. ' },
    { title: 'Card 1.4', description: 'Currently he is working on salaries to be paid by State Government to self-financed Engineering Institutes.' },
    { title: 'Card 1.4', description: ' He is a member of various committees and task teams constituted by government of Maharashtra.' },

  ];

  cardsSet2: { title: string; description: string }[] = [
    { title: 'Card 2.2', description: 'Dr. Pratapsinh Kakasaheb Desai attended and participated as member of Indian delegation on various International meets such as' },
    { title: 'Card 2.3', description: 'World Engineering Education Forum (WEEF),' },
    { title: 'Card 2.4', description: 'International Federation of Engineering Education Societies (IFEES),' },
    { title: 'Card 2.4', description: 'Global Engineering Dean’s Council (GEDC)' },
    { title: 'Card 2.4', description: 'in Countries like' },
    { title: 'Card 2.4', description: 'US, Canada, England, France, Germany, Argentina, Brazil, China, Japan, Dubai, Australia & Korea' },

    { title: 'Card 2.4', description: 'Dr. Pratapsinh Kakasaheb Desai is youngest ever President of the prestigious organization ISTE, New Delhi, ' },
    { title: 'Card 2.4', description: 'Past Vice President of ISTE, New Delhi, ISTE Executive Council Member for two terms' },
    { title: 'Card 2.4', description: 'Member representing India in Global Deans Council.' },
    { title: 'Card 2.4', description: 'Chairman, Indian Engineering Dean’s Council.' },
    { title: 'Card 2.4', description: 'Member of Governing Council, Engineering Staff College of India.' },
    { title: 'Card 2.4', description: 'He is a Council Member of All India Council for Technical Education.' },

    { title: 'Card 2.4', description: 'Member   of   the   Advisory   Committee   for   the   Overall   Curriculum Development Cell, IIT, New Delhi.' },
    { title: 'Card 2.4', description: 'Convener, Maharashtra State Technical Teachers Association.' },
   


  ];

  cardsSet3: { title: string; description: string }[] = [
    { title: 'Card 3.1', description: 'Invited by Africa Asia Scholars Global Network (AASGON) England. ' },
    { title: 'Card 3.2', description: 'Sanitary to United Nation Global compact and member of European Alliance for innovation. ' },
    { title: 'Card 3.3', description: 'Delivered Keynote Address at ' },
    { title: 'Card 3.4', description: 'Joint program of Kent University, University of Greenwich, University of Creative arts and Christ Church, hosted by AASGON in Dec. 2016.' },
    { title: 'Card 2.4', description: 'President, Mouni Vidyapeeth Staff Association.' },
    { title: 'Card 2.4', description: 'Invited to deliver Special Address at University of AMBO- Ethiopia.' },
    { title: 'Card 2.4', description: 'Visited almost 35 prominent universities in the world to studied a technical education scenario in the world' },
    { title: 'Card 2.4', description: 'Addressed conference on Diversity in Technical Education at Chicago, US.' },
    { title: 'Card 2.4', description: 'Visited more than 30 countries to study. The Technical Education Scenario around the Globe.' },
    { title: 'Card 2.4', description: 'Strategic partner in conduct of FIMAAFEST an International fest on Film, Music & Art to be conducted at IIT Delhi.' },
    { title: 'Card 2.4', description: 'Initiated ISTE-AICTE Faculty Development Program FDPS, and received Grant Rs. 4.5 Crores in this year.' },
  ];


  speed: string = 'fast';
  speedSlow: string = 'slow';
  direction: string = 'left';
  directionRight: string = 'right';


  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Check if user prefers reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimation();
    }
  }

  private addAnimation() {
    // Query selector for scroller elements
    const scrollers = document.querySelectorAll('.scroller');
    scrollers.forEach((scroller) => {
      // Apply the `data-animated` attribute
      this.renderer.setAttribute(scroller, 'data-animated', 'true');

      // Clone and append each child for seamless scrolling
      const scrollerInner = scroller.querySelector('.scroller__inner') as HTMLElement;
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  }
}
