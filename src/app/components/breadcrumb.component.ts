import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface BreadcrumbItem {
  label: string;
  route?: string;
  active?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="breadcrumbs text-sm mb-5">
      <ul>
        @for (item of items(); track item.label) {
          <li>
            @if (item.route && !item.active) {
              <a [routerLink]="item.route" class="link link-primary">{{ item.label }}</a>
            } @else {
              <span class="text-base-content/70">{{ item.label }}</span>
            }
          </li>
        }
      </ul>
    </div>
  `
})
export class BreadcrumbComponent {
  items = input.required<BreadcrumbItem[]>();
}