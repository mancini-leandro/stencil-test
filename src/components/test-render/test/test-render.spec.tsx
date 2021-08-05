import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { TestRender } from '../test-render';

describe('test-render', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      html: `<test-render></test-render>`,
      components: [TestRender]
    });
  });

  it('should render component', async () => {
    await page.waitForChanges();

    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.shadowRoot.querySelectorAll('li').length).toBe(7);
  });

  it('should render list item selected', async () => {
    const dayElement = page.root.shadowRoot.querySelectorAll('li');

    dayElement[0].click();

    await page.waitForChanges();

    const allDaySelected = page.root.shadowRoot.querySelectorAll('.day-selected');

    expect(allDaySelected.length).toBe(1);
  });
});
