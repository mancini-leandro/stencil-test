import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'testing-props',
  styleUrl: 'testing-props.css',
  shadow: true,
})
export class TestingProps {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <Host>
        <p>Olá, meu nome é {this.first} {this.last}</p>
      </Host>
    );
  }

}
