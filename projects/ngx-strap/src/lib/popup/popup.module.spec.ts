import { NgxStrapPopupModule } from './popup.module';

describe('NgxStrapPopupModule', () => {
  let ngxStrapPopupModule: NgxStrapPopupModule;

  beforeEach(() => {
    ngxStrapPopupModule = new NgxStrapPopupModule();
  });

  it('should create an instance', () => {
    expect(ngxStrapPopupModule).toBeTruthy();
  });
});
