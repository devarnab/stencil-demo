import { newE2EPage } from '@stencil/core/testing';

describe('ac-fetch-users', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ac-fetch-users></ac-fetch-users>');

    const element = await page.find('ac-fetch-users');
    expect(element).toHaveClass('hydrated');
  });
});
