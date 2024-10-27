import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-self-financing-sttp',
  standalone: true,
  imports: 
  [
    MatButton,
    MatIcon
  ],
  templateUrl: './self-financing-sttp.component.html',
  styleUrl: './self-financing-sttp.component.css'
})
export class SelfFinancingSttpComponent {

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'downloadables/STTPs proforma.pdf'; // Change this to your actual PDF path
    link.download = 'STTPs proforma.pdf'; // Name of the downloaded file
    link.click();
  }

}
