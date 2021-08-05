import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { TestingProps } from '../testing-props';

describe('testing-props', () => {
  let page: SpecPage;
  let component;
  let element;

  beforeEach(async () => {
    page = await newSpecPage({
      html: `<testing-props first="Leandro" last="Mancini"></testing-props>`,
      components: [TestingProps]
    });

    element = page.root.shadowRoot.querySelector('p');
    component = page.doc.querySelector('testing-props');
  });
  
  it('should render first and the last name', async () => {
    expect(element.textContent).toEqual('Olá, meu nome é Leandro Mancini');
  });

  it('should change first name', async () => {
    component.first = 'Miguel';

    await page.waitForChanges();

    expect(element.textContent).toEqual('Olá, meu nome é Miguel Mancini');
  });
});
