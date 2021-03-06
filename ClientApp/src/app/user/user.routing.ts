import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPage } from './components/list/user.page';

const routes: Routes = [{ path: '', component: UserPage }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
