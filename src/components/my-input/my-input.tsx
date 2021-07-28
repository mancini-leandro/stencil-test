import { Component, Host, h, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {

  @Prop({ mutable: true })
  value: string;

  @Event()
  inputValueChange: EventEmitter<string>;

  onInputChanged = (ev) => {
    this.inputValueChange.emit(ev.target.value);
  }

  render() {
    return (
      <Host>
        <input
          type="text"
          onInput={this.onInputChanged}
          value={this.value} />
      </Host>
    );
  }

}
