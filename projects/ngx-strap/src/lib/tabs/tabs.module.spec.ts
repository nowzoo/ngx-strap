import { NgxStrapTabsModule } from './tabs.module';

describe('NgxStrapTabsModule', () => {
  let ngxStrapTabsModule: NgxStrapTabsModule;

  beforeEach(() => {
    ngxStrapTabsModule = new NgxStrapTabsModule();
  });

  it('should create an instance', () => {
    expect(ngxStrapTabsModule).toBeTruthy();
  });
});
