import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button1Component } from '../button1/button1.component';
import { Button2Component } from '../button2/button2.component';
@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [
    CommonModule, Button1Component, Button2Component, NgOptimizedImage  
  ],
  templateUrl: './homeSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionComponent { }
