import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button1Component } from '../../button1/button1.component';

@Component({
  selector: 'app-features3',
  standalone: true,
  imports: [
    CommonModule, NgOptimizedImage, Button1Component
  ],
  templateUrl: './features3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features3Component { }
