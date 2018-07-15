import { NgxStrapFormModule } from './form.module';

describe('FormModule', () => {
  let formModule: NgxStrapFormModule;

  beforeEach(() => {
    formModule = new NgxStrapFormModule();
  });

  it('should create an instance', () => {
    expect(formModule).toBeTruthy();
  });
});
