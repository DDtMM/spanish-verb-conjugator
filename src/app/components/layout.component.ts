import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItem } from '../components/breadcrumb.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { signal } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent],
  template: `
    <div class="max-w-6xl mx-auto p-5">
      @if (breadcrumbs().length > 1) {
        <app-breadcrumb [items]="breadcrumbs()"></app-breadcrumb>
      }
      <router-outlet />
    </div>
  `
})
export class LayoutComponent {
  private readonly router = inject(Router);

  readonly breadcrumbs = toSignal(this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map((event) => this.createBreadcrumbs(event))
    ), { initialValue: [] as BreadcrumbItem[] });


  private createBreadcrumbs(event: NavigationEnd): BreadcrumbItem[] {
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Get the current activated route from the router
    let route: ActivatedRoute | null = this.router.routerState.root;
    let url = '';
    
    // Traverse the route tree to build breadcrumbs
    while (route) {

      // Get the first child route (since we have a layout wrapper)
      if (route.children && route.children.length > 0) {
        route = route.children[0];
        
        // Build the URL segment
        const urlSegment = route.snapshot.url.map((segment: any) => segment.path).join('/');
        if (urlSegment) {
          url += '/' + urlSegment;
        } else if (url === '') {
          url = '/';
        }
        
 
        // Get the title from route data
        const title = route.snapshot.data['title'] || route.snapshot.title;

        if (title) {
          const isActive = url === event.url;
          breadcrumbs.push({
            label: title,
            route: isActive ? undefined : url,
            active: isActive
          });
        }
        
        // Move to next child
        route = route.children.length > 0 ? route.children[0] : null;
      } else {
        route = null;
      }
    }

    return breadcrumbs;
  }
}