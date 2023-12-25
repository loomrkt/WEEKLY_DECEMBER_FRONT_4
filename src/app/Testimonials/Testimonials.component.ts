import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardTestimonialsComponent } from '../cardTestimonials/cardTestimonials.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule, CardTestimonialsComponent,
  ],
  templateUrl: './Testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent { }
