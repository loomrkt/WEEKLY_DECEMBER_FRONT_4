import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button1Component } from '../../button1/button1.component';

@Component({
  selector: 'app-features4',
  standalone: true,
  imports: [
    CommonModule, Button1Component
  ],
  templateUrl: './features4.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features4Component { }
