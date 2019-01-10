import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Field from "components/field/Field";
import GoodsInfo from "components/goods/GoodsInfo";
import Carousel from "components/goods/Carousel";
import { Button, Input, Select } from "zent";
import { forfreeItemNotAll } from "utils/constants";
import "./goods.scss";

class GoodsDetail extends Component {
  state = {
    name: "",
    price: "",
    stock: "",
    forfree: 1,
    carouselImg: [
      // "http://img.yzcdn.cn/public_files/2017/6/30/b0717bad7ad3ebd025e175d624ade39f.png",
      // "http://img.yzcdn.cn/public_files/2017/6/30/8a0536db89fafaa1269afeaa807a579b.png",
      // "http://img.yzcdn.cn/public_files/2017/6/30/7fe46674b697a514d9b6e2e155e88f1c.png",
      // "http://img.yzcdn.cn/public_files/2017/6/30/b7a98d721698fe8dc93689683706db45.png"
    ],
    detailImg: [
      // "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
      // "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg",
      // "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
    ],
    info: []
  };

  componentWillMount() {
    // this.props.match.params.goodsId
  }

  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleImageChange = (flag, payload) => {
    this.setState({
      [flag]: payload
    });
  };

  handleAddMap(payload) {
    const { info } = this.state;
    this.setState({
      info: [...info, payload]
    });
  }
  handleInfoChange(index, { label, content }) {
    const { info } = this.state;
    const temp = [...info];
    temp[index][label] = content;
    this.setState({
      info: temp
    });
  }
  handleInfoRemove(index) {
    const { info } = this.state;
    const temp = [...info];
    temp.splice(index, 1);
    this.setState({
      info: temp
    });
  }

  submit() {
    console.log(this.state);
  }

  render() {
    const {
      name,
      price,
      stock,
      forfree,
      carouselImg,
      detailImg,
      info
    } = this.state;
    return (
      <div className="gd">
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
                data={forfreeItemNotAll}
              />
            }
          />
        </div>
        <div>
          <h2 className="gd_h2">商品详情信息</h2>
          <GoodsInfo
            info={info}
            onInfoRemove={this.handleInfoRemove.bind(this)}
            onInfoChange={this.handleInfoChange.bind(this)}
            onAddMap={this.handleAddMap.bind(this)}
          />
        </div>
        <Carousel
          images={carouselImg}
          h2="轮播图"
          flag="carouselImg"
          onImageChange={this.handleImageChange.bind(this)}
        />
        <Carousel
          images={detailImg}
          h2="详情图"
          flag="detailImg"
          onImageChange={this.handleImageChange.bind(this)}
        />
        <Button
          className="gd-btn"
          type="primary"
          onClick={this.submit.bind(this)}
        >
          保存
        </Button>
      </div>
    );
  }
}
export default withRouter(GoodsDetail);
