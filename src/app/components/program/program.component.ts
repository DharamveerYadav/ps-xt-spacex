import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProgram } from 'src/app/shared/madel';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramComponent {
  @Input() program: IProgram;
  constructor() { }
}
