import { useState } from "react";

export function Customers() {
  const [customersCount, setCustomersCount] = useState<number>(2);

  return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Customer counter: {customersCount}</h3>
        <button className="button" onClick={() => setCustomersCount(customersCount + 1)}>
          add Customer
        </button>
      </div>
  );
}


/* import { Component } from "react";

interface State {
  customerCount: number;
}

export class Customers extends Component<object, State> {
  state = {
    customerCount: 0,
  };

  addCustomer = () => {
    this.setState({ customerCount: this.state.customerCount + 1 });
  };
  render() {
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Customer counter: {this.state.customerCount}</h3>
        <button className="button" onClick={this.addCustomer}>
          add a customer
        </button>
      </div>
    );
  }
}
 */