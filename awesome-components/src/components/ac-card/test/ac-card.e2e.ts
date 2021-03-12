import { newE2EPage } from '@stencil/core/testing';

describe('ac-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ac-card></ac-card>');

    const element = await page.find('ac-card');
    expect(element).toHaveClass('hydrated');
  });
});
