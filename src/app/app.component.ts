import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeSectionComponent } from './homeSection/homeSection.component';
import { SectionTComponent } from './sectionT/sectionT.component';
import { Features1Component } from './features/features1/features1.component';
import { Features2Component } from './features/features2/features2.component';
import { Features3Component } from './features/features3/features3.component';
import { Features4Component } from './features/features4/features4.component';
import { TestimonialsComponent } from './Testimonials/Testimonials.component';
import { EndSectionComponent } from './endSection/endSection.component';
import { FooterSComponent } from './footerS/footerS.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeSectionComponent, SectionTComponent, Features1Component, Features2Component
    , Features3Component, Features4Component, TestimonialsComponent, EndSectionComponent, FooterSComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'WEEKLY_DECEMBER_FRONT_4';
}
