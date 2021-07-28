import { MyInstance } from '../my-instance';

describe('my-instance', () => {
  it('should format the name', () => {
    let comp = new MyInstance();

    comp.name = 'Leandro';
    comp.lastName = 'Mancini';

    expect(comp.format()).toEqual('Leandro Mancini');
  });
});
