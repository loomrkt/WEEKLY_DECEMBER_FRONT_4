import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-features2',
  standalone: true,
  imports: [
    CommonModule, CardComponent
  ],
  templateUrl: './features2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features2Component { }
