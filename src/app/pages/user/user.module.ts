import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '@shared/shared.module';

const allComponent = [UsersComponent, EditComponent, AddComponent];

@NgModule({
  declarations: [...allComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
