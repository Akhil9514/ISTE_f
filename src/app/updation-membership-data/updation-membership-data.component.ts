import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-updation-membership-data',
  standalone: true,
  imports: [MatIcon,RouterModule],
  templateUrl: './updation-membership-data.component.html',
  styleUrl: './updation-membership-data.component.css'
})
export class UpdationMembershipDataComponent {

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'downloadables/Proforma- ISTE Life Membership Data.pdf'; // Change this to your actual PDF path
    link.download = 'Proforma- ISTE Life Membership Data.pdf'; // Name of the downloaded file
    link.click();
  }

}
