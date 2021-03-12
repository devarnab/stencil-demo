import { newSpecPage } from '@stencil/core/testing';
import { AcFetchUsers } from '../ac-fetch-users';

describe('ac-fetch-users', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AcFetchUsers],
      html: `<ac-fetch-users></ac-fetch-users>`,
    });
    expect(page.root).toEqualHtml(`
      <ac-fetch-users>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ac-fetch-users>
    `);
  });
});
