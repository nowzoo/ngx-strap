import { ModalDirective } from './modal.directive';

describe('ModalDirective', () => {
  it('should create an instance', () => {
    const t: any = {};
    const directive = new ModalDirective(t, t, t);
    expect(directive).toBeTruthy();
  });
});
