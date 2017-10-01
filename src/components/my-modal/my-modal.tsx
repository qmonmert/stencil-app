import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss'
})
export class MyModal {

  buttons = ['Okay', 'Cancel'];

  @Prop() title: string;
  @Prop() content: string;

  @State() showOptions = false;

  @Event() onClose: EventEmitter;

  closeModalHandler() {
    this.showOptions = false;
    this.onClose.emit();
  }

  showOptionsHandler() {
    this.showOptions = true;
  }

  render() {
    let options = null;
    if (this.showOptions) {
      options = (
        this.buttons.map(btn => (
          <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
        ))
      );
    }
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.content}</p>
        <hr/>
        <button onClick={this.showOptionsHandler.bind(this)}>Show options</button>
        <hr/>
        {options}
      </div>
    );
  }

}
