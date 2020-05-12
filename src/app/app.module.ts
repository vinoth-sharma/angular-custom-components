import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgToasterComponent } from './ng-toaster/ng-toaster.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMultiselect } from './mat-multiselect/mat-multiselect.component';
import { MaterialModule } from "./material.module";
@NgModule({
  declarations: [
    AppComponent,
    NgToasterComponent,
    MatMultiselect
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // MatSnackBarModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
