import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/home/home.component';
import { CostTableComponent } from 'app/cost-table/cost-table.component';
import { GroupsComponent } from 'app/groups/groups.component';
import { RegistrationComponent } from 'app/registration/registration.component';
import { LoginComponent } from 'app/login/login.component';

import { AuthGuard } from 'app/_guards/auth.guard';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] },
//   { path: 'cost_table',  component: CostTableComponent, canActivate: [AuthGuard] },
//   // { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'groups', component: GroupsComponent },
//   { path: 'registration', component: RegistrationComponent },
//   { path: 'login', component: LoginComponent }, 
//   { path: '**', redirectTo: '' }

// ];

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]//,
    // children: [
    //   { path: 'cost_table', component: CostTableComponent },
    //   { path: 'groups', component: GroupsComponent }
    // ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }