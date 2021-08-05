import { Component, Host, h, State } from '@stencil/core';

interface Day {
  label: string;
  selected: boolean;
}

@Component({
  tag: 'test-render',
  styleUrl: 'test-render.css',
  shadow: true,
})
export class TestRender {
  @State()
  days: Day[] = [
    { label: 'Domingo', selected: false },
    { label: 'Segunda', selected: false },
    { label: 'Terça', selected: false },
    { label: 'Quarta', selected: false },
    { label: 'Quinta', selected: false },
    { label: 'Sexta', selected: false },
    { label: 'Sábado', selected: false },
  ];

  onDayClicked = (day: Day) => {
    day.selected = !day.selected;

    this.days = [...this.days];
  }

  getClasses(day: Day) {
    return {
      'day-selected': day.selected
    };
  }

  render() {
    return (
      <Host>
        <p>Qual o seu dia da semana preferido?</p>
        <ul>
          {this.days.map(day => {
            return <li class={this.getClasses(day)} onClick={() => this.onDayClicked(day)}>{day.label}</li>;
          })}
        </ul>
      </Host>
    );
  }

}
