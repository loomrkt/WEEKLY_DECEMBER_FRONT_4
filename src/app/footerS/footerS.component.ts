import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-s',
  standalone: true,
  imports: [
    CommonModule, NgOptimizedImage
  ],
  templateUrl: './footerS.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterSComponent { }
