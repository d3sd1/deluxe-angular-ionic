import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'angular-site-template';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if ((isPlatformServer(this.platformId)) || (!(evt instanceof NavigationEnd))) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
