import { newSpecPage } from '@stencil/core/testing';
import { MyComplexProp } from '../my-complex-prop';

describe('my-complex-prop', () => {
  it('should change to upper case', () => {
    const comp = new MyComplexProp();
    const res = comp.toUpper(['aaa', 'bbb', 'ccc']);

    expect(res).toEqual(['AAA', 'BBB', 'CCC']);
  });

  it('should render', async () => {
    const page = await newSpecPage({
      components: [MyComplexProp],
      html: `<my-complex-prop></my-complex-prop>`
    });

    page.rootInstance.values = ['aaa', 'bbb', 'ccc'];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
    expect(page.rootInstance.items).toEqual(['AAA', 'BBB', 'CCC']);
  });

  it('should render with data', async () => {
    const page = await newSpecPage({
      components: [MyComplexProp],
      html: '<div></div>'
    });

    const comp = page.doc.createElement('my-complex-prop');

    (comp as any).values = ['Leandro', 'Mancini'];

    page.root.appendChild(comp);

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
    expect(page.rootInstance.items).toEqual(['LEANDRO', 'MANCINI']);
  });
});
