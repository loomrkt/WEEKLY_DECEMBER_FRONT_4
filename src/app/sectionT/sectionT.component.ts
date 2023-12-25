import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-t',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sectionT.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTComponent {
  @Input() titre!: string;
  @Input() sousTitre!: string;
 }
