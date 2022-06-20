import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  declarations: [UserComponent, LoggedUserComponent],
  exports: [UserComponent],
})
export class UserUiModule {}
