import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'my-complex-prop',
  styleUrl: 'my-complex-prop.css',
  shadow: true,
})
export class MyComplexProp {
  /**
   * Values prop
   */
  @Prop({ mutable: true })
  values: Array<string> = [];

  items: Array<string> = [];

  toUpper(items: Array<string>) {
    return items && items.length > 0 ? items.map(item => item.toUpperCase()) : [];
  }

  @Watch('values')
  onValuesChange(newValue: any) {
    this.items = this.toUpper(newValue);
  }

  componentWillLoad() {
    this.items = this.toUpper(this.values);
  }

  render() {
    return (
      <Host>
        <div class="values">
          {this.items.map((item) => {
            return <div class="values__item">
              <span>{item}</span>
            </div>
          })}
        </div>
      </Host>
    );
  }

}
