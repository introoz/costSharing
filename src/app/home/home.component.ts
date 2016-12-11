import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { AuthenticationService } from 'app/_services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private items: MenuItem[];

  private activeItem: MenuItem;

  constructor(
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.items = [
      { label: 'Groups', icon: 'fa-users', routerLink: ['home/groups'] },
      { label: 'Costs', icon: 'fa-money', routerLink: ['home/cost_table'] },
      // { label: 'Registration', icon: 'fa-money', routerLink: ['registration'] },
      // { label: 'Login', icon: 'fa-money', routerLink: ['login'] }
      // { label: 'Documentation', icon: 'fa-book' },
      // { label: 'Support', icon: 'fa-support' },
      // { label: 'Social', icon: 'fa-twitter' }
    ];

    this.activeItem = this.items[0];
  }
  // reset login status

  clicked() {
    console.log('wylogowywanie');
    this.authenticationService.logout();    
  }
}
