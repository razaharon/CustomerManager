import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent
  ]
})
export class SharedModule { }
