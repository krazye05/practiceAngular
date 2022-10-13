import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModules } from './material.modules';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomTableModule } from './shared/custom-table/custom-table.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    HttpClientModule,
    CommonModule,
    FormsModule,
    CustomTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
