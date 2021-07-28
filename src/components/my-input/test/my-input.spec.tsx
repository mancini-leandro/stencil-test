import { newSpecPage } from '@stencil/core/testing';
import { MyInput } from '../my-input';

describe('my-input', () => {
  it('should input value', async () => {
    const page = await newSpecPage({
      components: [MyInput],
      html: `<my-input value="Leandro Mancini"></my-input>`
    });

    const input = page.root.shadowRoot.querySelector('input');

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
    expect(input.value).toEqual('Leandro Mancini');
  });

  it('should emit value when input entered', async () => {
    const page = await newSpecPage({
      components: [MyInput],
      html: `<my-input></my-input>`
    });
    const spyInput = jest.fn();
    const input = page.root.shadowRoot.querySelector('input');

    page.doc.addEventListener('inputValueChange', spyInput);

    input.value = 'Leandro';

    await input.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(spyInput).toHaveBeenCalled();
    expect(spyInput.mock.calls[0][0].detail).toEqual('Leandro');
  });
});
