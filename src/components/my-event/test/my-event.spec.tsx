import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { MyEvent } from '../my-event';

describe('my-event', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MyEvent],
      html: `<my-event></my-event>`
    }); 
  });

  it('should emit on click', async () => {
    const button = page.root.shadowRoot.querySelector('button');
    const buttonSpy = jest.fn();

    page.win.addEventListener('buttonClicked', buttonSpy);

    button.click();

    await page.waitForChanges();

    expect(buttonSpy).toHaveBeenCalled();
    expect(buttonSpy.mock.calls[0][0].detail).toBeTruthy();
    expect(button.textContent).toEqual('Clique aqui!');
  });

  it('should run method', async () => {
    const button = page.root.shadowRoot.querySelector('button');

    expect(button.textContent).toEqual('Clique aqui!');

    await page.root.updateFace('Novo clique');
    await page.waitForChanges();

    expect(button.textContent).toEqual('Novo clique');
  });
});
