import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component , Input } from '@angular/core';

@Component({
  selector: 'app-button1',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button1Component {
  @Input() texte!: String;
 }
