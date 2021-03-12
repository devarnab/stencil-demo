import { Component, h } from '@stencil/core';

@Component({
  tag: 'ac-spinner',
  styleUrl: 'ac-spinner.css',
  shadow: true,
})
export class AcSpinner {
  render() {
    return <div class="loader">Loading...</div>;
  }
}
