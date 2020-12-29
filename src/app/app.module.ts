import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { GorneMenuComponent } from './gorneMenu/gorneMenu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RolesAndPermissionsComponent } from './roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './settings/settings.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [													
    AppComponent,
      GorneMenuComponent,
      PageNotFoundComponent,
      UsersListComponent,
      UserEditComponent,
      RolesAndPermissionsComponent,
      SettingsComponent,
      HeroesComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    RouterModule.forRoot([
{path: 'users-list', component: UsersListComponent},
{path: 'user-edit', component: UserEditComponent},
{path:'roles-and-permissions', component: RolesAndPermissionsComponent},
{path: 'settings', component: SettingsComponent},
{path:'', redirectTo: 'heroes-list', pathMatch: 'full'},
{path: '**', component:PageNotFoundComponent}
    ]),
    ReactiveFormsModule,
    NgSelectModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
