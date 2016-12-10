import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

// import {FormsModule,ReactiveFormsModule}    from '@angular/forms';
// import {ValidationDemo} from 'primeng/primeng';
// import {ValidationDemoRoutingModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

import { RegistrationComponent } from 'app/registration/registration.component';
import { LoginComponent } from 'app/login/login.component';

@NgModule({
	imports: [
		CommonModule,
        ReactiveFormsModule,
		// ValidationDemoRoutingModule,
        GrowlModule,
        PanelModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule,
        FormsModule
	],
	declarations: [
		RegistrationComponent,
        LoginComponent
	],
    exports: [
        RegistrationComponent,
        LoginComponent
    ]
})

export class AuthenticationModule {}

// export class LoginScreenModule {}