import { newSpecPage } from '@stencil/core/testing';
import { AcCard } from '../ac-card';

describe('ac-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AcCard],
      html: `<ac-card></ac-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ac-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ac-card>
    `);
  });
});
