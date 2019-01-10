import React, { Component } from "react";
import { Table } from "zent";

const datasets = [
  {
    orderid: "5024217",
    bro_uvpv: "0/0",
    stock_num: "60",
    sold_num: 0
  },
  {
    item_id: "5024277",
    bro_uvpv: "0/0",
    stock_num: 59,
    sold_num: 0
  },
  {
    item_id: "13213123",
    bro_uvpv: "0/0",
    stock_num: 159,
    sold_num: 0
  }
];

const columns = [
  {
    title: "商品",
    bodyRender: data => {
      return <div>{data.item_id}</div>;
    }
  },
  {
    title: "订单号",
    name: "orderId",
    width: "200px"
  },
  {
    title: "单价/数量",
    name: "unitPrice",
    width: "100px",
    textAlign: "center",
    isMoney: true
  },
  {
    title: "买家",
    name: "buyer",
    width: "200px"
  },
  {
    title: "下单时间",
    name: "createTime",
    width: "200px"
  },
  {
    title: "订单状态",
    name: "state",
    width: "200px"
  },
  {
    title: "实付金额",
    name: "totalPrice",
    width: "200px"
  },
  {
    title: "操作",
    name: "totalPrice",
    width: "200px"
  },
];

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      current: 0,
      total: 101,
      maxPageToShow: 8,
      pageSize: 20
    };
  }

  onChange(data) {
    console.log(data);
    this.setState({
      current: data.current,
      pageSize: data.pageSize
    });
  }

  render() {
    return (
      <Table
        columns={columns}
        datasets={datasets}
        rowKey="item_id"
        onChange={this.onChange.bind(this)}
        pageInfo={{
          limit: this.state.limit,
          current: this.state.current,
          maxPageToShow: this.state.maxPageToShow,
          total: this.state.total,
          pageSize: [20, { value: 30, isCurrent: true }]
        }}
      />
    );
  }
}

export default OrderList;
