import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { BooleanInput } from '@angular/cdk/coercion';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'soca13';
  mdcBackdrop: BooleanInput = false;
  drawerMode: MatDrawerMode = "push";

  readonly breakpoint$ = this.breakpointObserver
  .observe([ '(max-width: 500px)']);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanges()
  );
  }

  breakpointChanges(): void {

    if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
      this.drawerMode = "over";
      this.mdcBackdrop = true;
    } else {
      this.drawerMode = "push";
      this.mdcBackdrop = false;
    }
    
  }

}
