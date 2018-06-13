import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RepoLinkComponent } from './repo-link/repo-link.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [RepoLinkComponent],
  exports: [RepoLinkComponent]
})
export class SharedModule { }
