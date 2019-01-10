import React, { Component } from "react";
import { Input, Select, Button, DateRangeQuickPicker } from "zent";
import Field from "components/field/Field";
import { orderTpye, orderSearchType } from "utils/constants";

import "./orderFilter.scss";

class OrderFliter extends Component {
  handleChange = e => {
    const target = e.target;
    this.props.onFormChange({
      [target.name]: target.value
    });
  };
  handleChangeDate = (value, chooseDays) => {
    this.props.onHandleChangeDate({
      startTime: value[0],
      endTime: value[1],
      chooseDays
    });
  };
  onSearch(){
    
  }

  render() {
    const {
      order_label,
      order_label_value,
      state,
      chooseDays,
      startTime,
      endTime
    } = this.props;
    const dateValue = [startTime, endTime];
    return (
      <div className="of">
        <div className="trade-order-list__filter-order-search">
          <Select
            wrapperClassName="order-label"
            name="order_label"
            value={order_label}
            data={orderSearchType}
            onChange={this.handleChange}
          />
          <Input
            name="order_label_value"
            value={order_label_value}
            onChange={this.handleChange}
            className="order-input"
            type="text"
          />
        </div>
        <Field
          label="订单状态"
          content={
            <Select
              name="state"
              value={state}
              onChange={this.handleChange}
              data={orderTpye}
            />
          }
        />
        <Field
          label="订单时间"
          content={
            <DateRangeQuickPicker
              onChange={this.handleChangeDate}
              format="YYYY-MM-DD HH:mm:ss"
              value={dateValue}
              chooseDays={chooseDays}
              preset={[
                {
                  text: "今",
                  value: 0
                },
                {
                  text: "近7天",
                  value: 7
                },
                {
                  text: "近30天",
                  value: 30
                }
              ]}
            />
          }
        />
        <Button size="small" type="primary" onClick={this.onSearch.bind(this)}>
          筛选
        </Button>
        <div />
      </div>
    );
  }
}

export default OrderFliter;
