import { CommonModule, NgOptimizedImage,NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-testimonials',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,NgOptimizedImage
  ],
  templateUrl: './cardTestimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTestimonialsComponent {
  @Input() nom!: string;
  @Input() description!: string;
  @Input() url!: string;
  @Input() isMt: boolean = false;
 }
