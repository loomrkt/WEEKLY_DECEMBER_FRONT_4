import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Button2Component } from '../../../button2/button2.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule, Button2Component,NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() titre!: string;
  @Input() description!: string;
  @Input() btnT!: string;
  @Input() url!: string;
  @Input() wi!: string;
  @Input() hi!: string;
}
