import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input } from '@angular/core';

@Component({
  selector: 'app-block1',
  standalone: true,
  imports: [
    CommonModule, NgOptimizedImage,
  ],
  templateUrl: './block1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Block1Component {
  @Input() titre!: string;
  @Input() description!: string;
  @Input() url!: string;
  @Input() wi!: string;
  @Input() hi!: string;
}
