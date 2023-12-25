import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button2',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button2Component {
  @Input() texte!: string;
}
