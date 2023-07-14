import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    }
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    })
  }

  render() {
    // створити змінну, значення якої буде визначатись тернаркою
    // в залежності від значення, яке зберігається у стейті, ви підставляєте те, чи інше значення
    const className = this.state.isOn ? 'lamp-on' : 'lamp-off';

    return (
      <>
        <div className={className}></div>
        <button onClick={() => {this.toggle()}}>Toggle</button>
      </>
    )
  }
}

export default App;

/*

Створити кружечок-лампочку і кнопку-вимикач
За натисненням на кнопку кружечок має "підсвітись" - наповнитись жовтим кольором
Якщо лампочка була включена в момент натиснення кнопки - її потрібно вимкнути

*/
