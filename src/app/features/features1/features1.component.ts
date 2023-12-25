import { CommonModule,NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Block1Component } from '../components/block1/block1.component';

@Component({
  selector: 'app-features1',
  standalone: true,
  imports: [
    CommonModule, Block1Component,NgOptimizedImage
  ],
  templateUrl: './features1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features1Component {
}
