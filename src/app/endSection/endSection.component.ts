import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button2Component } from '../button2/button2.component';
@Component({
  selector: 'app-end-section',
  standalone: true,
  imports: [
    CommonModule, NgOptimizedImage, Button2Component
  ],
  templateUrl: './endSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndSectionComponent { }
