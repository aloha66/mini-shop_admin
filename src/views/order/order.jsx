import React, { Component } from "react";
import OrderFilter from "components/order/OrderFilter";
import OrderList from "components/order/OrderList";

import "./order.scss";

class Order extends Component {
  state = {
    list: [],
    order_label: 1,
    order_label_value: "",
    startTime: "",
    endTime: "",
    chooseDays: 0,
    state: 0
  };

  handleChangeDate(payload) {
    this.setState({...payload});
  }
  handFormChange(payload) {
      console.log('payload',payload)
    this.setState({...payload});
  }

  render() {
    const data = this.state;
    return (
      <div className="order-list-page">
        <OrderFilter {...data} onFormChange={this.handFormChange.bind(this)} onHandleChangeDate={this.handleChangeDate.bind(this)} />
        <OrderList data={data} />
      </div>
    );
  }
}

export default Order;
