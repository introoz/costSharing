import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { MenuModule, TabMenuModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { CostTableComponent } from './cost-table/cost-table.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    CostTableComponent,
    GroupsComponent       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    TabMenuModule,    
    MenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
