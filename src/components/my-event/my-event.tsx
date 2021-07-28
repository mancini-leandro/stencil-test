import { Component, h, State, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'my-event',
  styleUrl: 'my-event.css',
  shadow: true,
})
export class MyEvent {
  @State()
  buttonFace: string = 'Clique aqui!';

  @State()
  clicked: boolean;

  @Event()
  buttonClicked: EventEmitter<boolean>;

  @Method()
  async updateFace(value: string) {
    this.buttonFace = value;
  }

  onClicked() {
    this.clicked = !this.clicked;

    this.buttonClicked.emit(this.clicked);
  }

  render() {
    return (
      <button class="c-button" onClick={() => this.onClicked()}>
        {this.buttonFace}
      </button>
    );
  }

}
