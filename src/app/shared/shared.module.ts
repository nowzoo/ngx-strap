import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoLinkComponent } from './repo-link/repo-link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RepoLinkComponent],
  exports: [RepoLinkComponent]
})
export class SharedModule { }
