import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormComponentsModule } from '../shared/form-components/form-components.module';
import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';

@NgModule({
  declarations: [UserEditComponent],
  imports: [CommonModule, FormComponentsModule, UserEditRoutingModule, ReactiveFormsModule],
})
export class UserEditModule {}
