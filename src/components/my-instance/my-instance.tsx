import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-instance',
  styleUrl: 'my-instance.css',
  shadow: true,
})
export class MyInstance {
  /**
   * prop name
   */
  @Prop()
  name: string;

  /**
   * prop lastName
   */
  @Prop()
  lastName: string;

  format(): string {
    return [this.name, this.lastName].join(' ');
  }

  render() {
    return (
      <Host>
        <p class="name">Meu nome é: {this.format()}</p>
        <slot />
      </Host>
    );
  }

}
