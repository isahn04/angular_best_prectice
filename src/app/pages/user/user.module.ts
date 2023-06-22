import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const allComponent = [
  UsersComponent,
  EditComponent,
  AddComponent
]

@NgModule({
  declarations: [...allComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
