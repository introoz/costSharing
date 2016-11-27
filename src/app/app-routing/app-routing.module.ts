import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from 'app/app.component';
import { CostTableComponent }      from 'app/cost-table/cost-table.component';
import { GroupsComponent } from 'app/groups/groups.component';

const routes: Routes = [
  { path: '', redirectTo: '/groups', pathMatch: 'full' },
  { path: 'cost_table',  component: CostTableComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}