import { BababaModule } from './bababa.module';

describe('BababaModule', () => {
  let bababaModule: BababaModule;

  beforeEach(() => {
    bababaModule = new BababaModule();
  });

  it('should create an instance', () => {
    expect(bababaModule).toBeTruthy();
  });
});
