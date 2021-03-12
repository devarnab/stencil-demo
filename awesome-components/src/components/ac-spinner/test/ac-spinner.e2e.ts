import { newE2EPage } from '@stencil/core/testing';

describe('ac-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ac-spinner></ac-spinner>');

    const element = await page.find('ac-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
