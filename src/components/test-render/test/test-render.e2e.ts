import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('test-render', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<test-render></test-render>`
    });

    element = await page.find('test-render');
  });

  it('should render component', async () => {
    const question = await page.find('test-render >>> p');
    const dayElement = await page.findAll('test-render >>> li');

    expect(question).toEqualText('Qual o seu dia da semana preferido?');
    expect(dayElement.length).toBe(7);
  });

  it('should render list item selected', async () => {
    const dayElement = await page.findAll('test-render >>> li');
    
    dayElement[0].click();

    await page.waitForChanges();

    const daySelected = await page.find('test-render >>> .day-selected');

    expect(daySelected).toEqualText('Domingo');
  });
});
