import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenCloseComponent } from './open-close/open-close.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';


const routes: Routes = [
  {path: 'open-close', component: OpenCloseComponent},
  {path: 'insert-remove', component: InsertRemoveComponent},
  {path: '**', component: OpenCloseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
