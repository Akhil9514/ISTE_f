import { Routes } from '@angular/router';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { HomeComponent } from './home/home.component';
import { IsteJournalComponent } from './iste-journal/iste-journal.component';
import { SelfFinancingSttpComponent } from './self-financing-sttp/self-financing-sttp.component';
import { IsteJournal45Component } from './iste-journal-45/iste-journal-45.component';
import { IsteSpecialIssueComponent } from './iste-special-issue/iste-special-issue.component';
import { IsteExecutiveCouncilMembersComponent } from './iste-executive-council-members/iste-executive-council-members.component';
import { OfficeBearersComponent } from './office-bearers/office-bearers.component';
import { FormerPresidentsComponent } from './former-presidents/former-presidents.component';
import { FormerExecutiveSecretariesComponent } from './former-executive-secretaries/former-executive-secretaries.component';
import { InstitutionMembershipComponent } from './institution-membership/institution-membership.component';
import { StudentMembershipFeeComponent } from './student-membership-fee/student-membership-fee.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FacultyAwardsComponent } from './faculty-awards/faculty-awards.component';
import { MtechThesisAwardComponent } from './mtech-thesis-award/mtech-thesis-award.component';
import { StudentAwardsComponent } from './student-awards/student-awards.component';
import { SectionSecretariesComponent } from './section-secretaries/section-secretaries.component';
import { SectionChairmenComponent } from './section-chairmen/section-chairmen.component';
import { ManagingCommitteeMembersComponent } from './managing-committee-members/managing-committee-members.component';
import { EstablishISTEChapterComponent } from './establish-iste-chapter/establish-iste-chapter.component';
import { IncentivesChapterComponent } from './incentives-chapter/incentives-chapter.component';
import { EstablishStudentChapterComponent } from './establish-student-chapter/establish-student-chapter.component';
import { StudentIncentiveChapterComponent } from './student-incentive-chapter/student-incentive-chapter.component';
import { AboutComponent } from './about/about.component';
import { PresidentAboutComponent } from './president-about/president-about.component';
import { IsteAnnualConventionsComponent } from './iste-annual-conventions/iste-annual-conventions.component';
import { IsteStudentConventionsComponent } from './iste-student-conventions/iste-student-conventions.component';
import { HonoraryFellowGradeMembersComponent } from './honorary-fellow-grade-members/honorary-fellow-grade-members.component';
import { HowToBecomeIsteMemberComponent } from './how-to-become-iste-member/how-to-become-iste-member.component';
import { MembershipBenefitsComponent } from './membership-benefits/membership-benefits.component';
import { MembershipCardsCertificatesComponent } from './membership-cards-certificates/membership-cards-certificates.component';
import { DownloadMembershipFormComponent } from './download-membership-form/download-membership-form.component';
import { ContributeArticlesIjteComponent } from './contribute-articles-ijte/contribute-articles-ijte.component';
import { UpdationMembershipDataComponent } from './updation-membership-data/updation-membership-data.component';
import { LifeTimeMembershipComponent } from './life-time-membership/life-time-membership.component';
import { InstitutionalMembershipAcademicRecordsComponent } from './institutional-membership-academic-records/institutional-membership-academic-records.component';
import { StudentMembershipAcademicRecordsComponent } from './student-membership-academic-records/student-membership-academic-records.component';
import { CorporateInstitutionalMembershipAcademicRecordsComponent } from './corporate-institutional-membership-academic-records/corporate-institutional-membership-academic-records.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


export const routes: Routes = [

  { path: '',component: HomeComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent }, 
  // { path: 'iste-journal', component: IsteJournalComponent }, 
  { path: 'self-financing-sttp', component: SelfFinancingSttpComponent }, 
  { path: 'iste-journal-vol-45', component: IsteJournal45Component },
  { path: 'ijte-special-issue', component: IsteSpecialIssueComponent },
  { path: 'iste-executive-council-members', component: IsteExecutiveCouncilMembersComponent },
  { path: 'office-bearers-of-iste', component: OfficeBearersComponent },
  { path: 'former-presidents-of-iste', component: FormerPresidentsComponent },
  { path: 'former-executive-secretaries', component: FormerExecutiveSecretariesComponent },
  { path: 'check-your-institutional-membership-no', component: InstitutionMembershipComponent },
  { path: 'distribution-of-student-membership-fee', component: StudentMembershipFeeComponent },
  { path: 'iste-gallery', component: GalleryComponent },
  { path: 'list-of-iste-faculty-awards', component: FacultyAwardsComponent },
  { path: 'list-of-iste-best-m-tech-thesis-awards', component: MtechThesisAwardComponent },
  { path: 'list-of-iste-student-awards', component: StudentAwardsComponent },
  { path: 'iste-section-secretaries', component: SectionSecretariesComponent },
  { path: 'iste-section-chairmen', component: SectionChairmenComponent },
  { path: 'section-managing-committee-members', component: ManagingCommitteeMembersComponent },
  { path: 'how-to-establish-an-iste-chapter', component: EstablishISTEChapterComponent },
  { path: 'incentives-to-iste-chapter', component: IncentivesChapterComponent },
  { path: 'how-to-establish-an-iste-students-chapter', component: EstablishStudentChapterComponent },
  { path: 'incentives-to-iste-student-chapters', component: StudentIncentiveChapterComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'president-info', component: PresidentAboutComponent },
  { path: 'details-of-iste-annual-conventions', component: IsteAnnualConventionsComponent },
  { path: 'details-of-iste-student-conventions', component: IsteStudentConventionsComponent },
  { path: 'honorary-fellow-grade-members-of-iste', component: HonoraryFellowGradeMembersComponent },
  { path: 'how-to-become-iste-member', component: HowToBecomeIsteMemberComponent },
  { path: 'membership-benefits', component: MembershipBenefitsComponent },
  { path: 'membership-cards-certificates', component: MembershipCardsCertificatesComponent },
  { path: 'download-form', component: DownloadMembershipFormComponent },
  { path: 'contribute-articles-in-ijte', component: ContributeArticlesIjteComponent },
  { path: 'updation-of-membership-data', component: UpdationMembershipDataComponent },
  { path: 'life-time-membership', component: LifeTimeMembershipComponent },
  { path: 'institutional-membership', component: InstitutionalMembershipAcademicRecordsComponent },
  { path: 'student-membership', component: StudentMembershipAcademicRecordsComponent },
  { path: 'corporate-institutional-membership', component: CorporateInstitutionalMembershipAcademicRecordsComponent },
  { path: 'iste-newsletter', component: NewsletterComponent },


  


];
