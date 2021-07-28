import { newSpecPage } from '@stencil/core/testing';
import { MyInstance } from '../my-instance';

describe('my-instance', () => {
  it('should format the name', () => {
    let comp = new MyInstance();

    comp.name = 'Leandro';
    comp.lastName = 'Mancini';

    expect(comp.format()).toEqual('Leandro Mancini');
  });

  it('should render', async () => {
    const page = await newSpecPage({
      html: '<my-instance name="Leandro" last-name="Mancini"></my-instance>',
      components: [MyInstance]
    });

    expect(page.root).toEqualHtml(`
      <my-instance name=\"Leandro\" last-name=\"Mancini\">
        <mock:shadow-root>
          <p>Meu nome é: Leandro Mancini</p>
        </mock:shadow>
      </my-instance>
    `);
  });
});
