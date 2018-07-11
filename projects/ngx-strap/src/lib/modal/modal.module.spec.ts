import { NgxStrapModalModule } from './modal.module';

describe('ModalModule', () => {
  let modalModule: NgxStrapModalModule;

  beforeEach(() => {
    modalModule = new NgxStrapModalModule();
  });

  it('should create an instance', () => {
    expect(modalModule).toBeTruthy();
  });
});
