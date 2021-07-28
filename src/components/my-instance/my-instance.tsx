import { Component, Prop } from '@stencil/core';

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

}
