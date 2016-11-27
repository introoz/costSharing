import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: MenuItem[];

  private activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Groups', icon: 'fa-users' },
      { label: 'Costs', icon: 'fa-money' }
      // { label: 'Documentation', icon: 'fa-book' },
      // { label: 'Support', icon: 'fa-support' },
      // { label: 'Social', icon: 'fa-twitter' }
    ];

    this.activeItem = this.items[0];
  }

}
