import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('testing-props', () => {
  let page: E2EPage;
  let component: E2EElement;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<testing-props first="Leandro" last="Mancini"></testing-props>`
    });

    component = await page.find('testing-props');
    element = await page.find('testing-props >>> p');
  });

  it('should render first and the last name', async () => {
    expect(element.textContent).toEqualText('Olá, meu nome é Leandro Mancini');
  });

  it('should change first name', async () => {
    component.setProperty('first', 'Miguel');

    await page.waitForChanges();

    expect(element.textContent).toEqualText('Olá, meu nome é Miguel Mancini');
  });
});
