import React, { Component } from "react";
import { withRouter,Link } from "react-router-dom";
import Field from "components/field/Field";
import { Table, Button, Input, Select,Pop, Sweetalert } from "zent";
import { forfreeItem } from "utils/constants";

const datasets = [
  {
    id: 1,
    name: "111",
    unitPrice: 10,
    stock: 20,
    createTime: "2018-12-13",
    forfree: 1,
    sale: false
  }
];

class Goods extends Component {
  state = {
    name: "",
    price: "",
    stock: "",
    forfree: 0,
    limit: 10,
    current: 0,
    total: 101,
    maxPageToShow: 8,
    pageSize: 20,
    columns: [
      {
        title: "商品Id",
        name: "id",
        textAlign: "center"
      },
      {
        title: "商品名称",
        name: "name",
        textAlign: "center",
        width: "200px"
      },
      {
        title: "单价",
        name: "unitPrice",
        textAlign: "center",
        isMoney: true
      },
      {
        title: "库存",
        name: "stock",
        textAlign: "center"
      },
      {
        title: "创建时间",
        name: "createTime",
        textAlign: "center",
        width: "200px"
      },
      {
        title: "包邮",
        name: "forfree"
      },
      {
        title: "操作",
        name: "operation",
        width: "136px",
        textAlign: "center",
        bodyRender: ({ sale,id }) => {
          return (
            <div>
              <Button size="small" onClick={this.gotoDetail.bind(this,id)}>详情</Button>
              {sale ? (
                <Pop
                position="left-top"
                trigger="click"
                content="下架商品在前台页面不显示，按确定下架"
                onConfirm={this.confirmHandler}
              >
                <Button size="small" type="danger">
                  下架
                </Button>
              </Pop>
              ) : (
                <Pop
                position="left-top"
                trigger="click"
                content="上架商品在前台页面显示，按确定上架"
                onConfirm={this.confirmHandler}
              >
                 <Button size="small" type="success">
                  上架
                </Button>
              </Pop>
               
              )}
            </div>
          );
        }
      }
    ]
  };

  gotoDetail(id) {
    this.props.history.push(`goods/${id}`)
  }

  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  onChange(data) {
    console.log(data);
    this.setState({
      current: data.current,
      pageSize: data.pageSize
    });
  }

  confirmHandler = () => {
    Sweetalert.alert({
      content: 'Pop关闭了',
      parentComponent: this
    });
  }

  render() {
    const { name, price, stock, forfree,columns } = this.state;
    return (
      <div>
        <div>
          <Field
            label="商品名称"
            content={
              <Input
                name="name"
                value={name}
                onChange={this.handleChange.bind(this)}
                className=""
                type="text"
              />
            }
          />
          <Field
            label="单价"
            content={
              <Input
                name="price"
                value={price}
                onChange={this.handleChange.bind(this)}
                className=""
                type="number"
              />
            }
          />
          <Field
            label="库存"
            content={
              <Input
                name="stock"
                value={stock}
                onChange={this.handleChange.bind(this)}
                className=""
                type="number"
              />
            }
          />
          <Field
            label="包邮"
            content={
              <Select
                name="forfree"
                value={forfree}
                onChange={this.handleChange.bind(this)}
                data={forfreeItem}
              />
            }
          />
          <Button>搜索</Button>
          <Link to="/addGoods">
          <Button type="primary">新增</Button></Link>
          
        </div>
        <div>
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
      </div>
    );
  }
}

export default withRouter(Goods);
