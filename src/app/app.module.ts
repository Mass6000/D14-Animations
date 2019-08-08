import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OpenCloseComponent } from './open-close/open-close.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { MatFormFieldModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FilterStaggerComponent } from './filter-stagger/filter-stagger.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    InsertRemoveComponent,
    FilterStaggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
