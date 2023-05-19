import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSharedModule } from '../../ui/page-shared/page-shared.module';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    PageSharedModule
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

}
