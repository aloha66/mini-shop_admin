import React, { Component } from "react";
import { Table, Button,Input } from "zent";
import Field from "components/field/Field";

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
    title: "id",
    bodyRender: data => {
      return <div>{data.item_id}</div>;
    }
  },
  {
    title: "uid",
    name: "uid",
    width: "200px"
  },
  {
    title: "phone",
    name: "phone",
    width: "100px",
    textAlign: "center",
    isMoney: true
  },
  {
    title: "地址",
    name: "address",
    width: "200px"
  },
  {
    title: "注册/登录时间",
    name: "time",
    width: "200px"
  },
];

class User extends Component {
    state = {
        phone:""
    }
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

  handleChange(e) {
      const target = e.target;
      this.setState({
        [target.name]:target.value
      })
  }

  onChange(data) {
    console.log(data);
    this.setState({
      current: data.current,
      pageSize: data.pageSize
    });
  }

  render() {
      const {phone} = this.state
    return (
      <div>
        <div>
          <Field
            label="手机号"
            content={
              <Input
                name="phone"
                value={phone}
                onChange={this.handleChange}
                className=""
                type="text"
              />
            }
          />
          <Button type="primary">搜索</Button>
        </div>
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
      </div>
    );
  }
}

export default User;
