import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { MenuModule, TabMenuModule} from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { DataScrollerModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from 'app/home/home.component';
import { CostTableComponent } from './cost-table/cost-table.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { AuthenticationModule } from 'app/authentication/authentication.module';
import { AuthenticationService } from 'app/_services/authentication.service';
import { AuthGuard } from 'app/_guards/auth.guard';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Groups2Component } from './groups2/groups2.component';
import { MembersComponent } from './members/members.component';

// import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CostTableComponent,
    GroupsComponent,
    Groups2Component,
    MembersComponent               
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
    AppRoutingModule,
    MessagesModule,
    AuthenticationModule,
    DataScrollerModule
  ],
  providers: [AUTH_PROVIDERS, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
