import { newSpecPage } from '@stencil/core/testing';
import { AcSpinner } from '../ac-spinner';

describe('ac-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AcSpinner],
      html: `<ac-spinner></ac-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <ac-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ac-spinner>
    `);
  });
});
