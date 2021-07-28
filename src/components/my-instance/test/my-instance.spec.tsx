import { newSpecPage } from '@stencil/core/testing';
import { MyInstance } from '../my-instance';

describe('my-instance', () => {
  const html = `
    <my-instance name="Leandro" last-name="Mancini">
      <p class="cool">Está frio</p>
    </my-instance>
  `;

  it('should format the name', () => {
    let comp = new MyInstance();

    comp.name = 'Leandro';
    comp.lastName = 'Mancini';

    expect(comp.format()).toEqual('Leandro Mancini');
  });

  it('should render with shadow dom', async () => {
    const page = await newSpecPage({
      html,
      components: [MyInstance]
    });

    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.querySelector('.name')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.name')).toBeTruthy();
    expect(page.root.querySelector('.cool')).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it('should render without shadow dom', async () => {
    const page = await newSpecPage({
      html,
      components: [MyInstance],
      supportsShadowDom: false
    });

    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.name')).toBeTruthy();
    expect(page.root.querySelector('.cool')).toBeTruthy();
  });
});
