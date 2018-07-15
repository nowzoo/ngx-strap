import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStrapFormModule } from '@nowzoo/ngx-strap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRouteComponent } from './home-route/home-route.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxStrapFormModule
  ],
  declarations: [HomeRouteComponent]
})
export class HomeModule { }
