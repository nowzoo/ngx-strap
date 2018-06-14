import { InjectionToken } from '@angular/core';
export interface TooltipOptions {
  [key: string]: any;
}
export const NgxStrapTooltipOptions = new InjectionToken<TooltipOptions>('default tooltip options', {
  providedIn: 'root', factory: () => ({})
});
