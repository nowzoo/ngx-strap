import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
@NgModule({
  imports: [
    CommonModule
  ]
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: ModalModule, providers: [
      ModalService
    ]};
  }
}
