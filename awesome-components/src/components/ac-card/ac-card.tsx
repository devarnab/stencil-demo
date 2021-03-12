import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ac-card',
  styleUrl: 'ac-card.css',
  shadow: true,
})
export class AcCard {
  @Prop() acTitle: string;
  @Prop() acFooterLink: string;
  @Prop() acFooterText: string;

  render() {
    return (
      <Host>
        <h3>{this.acTitle}</h3>
        <div class="inner-text">
          <slot />
        </div>
        <div>
          <a class="footer-link" href={this.acFooterLink} target="_blank">
            {this.acFooterText}
          </a>
        </div>
      </Host>
    );
  }
}
