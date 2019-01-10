import React, { Component } from "react";
import MapField from "components/field/MapField";
import { Button, Input, Icon } from "zent";
import "./goods.scss";

class GoodsInfo extends Component {
  add() {
    this.props.onAddMap({ label: "", content: "" });
  }

  handleChange(e) {
    const target = e.target;
    this.props.onInfoChange(target.dataset.index, {
      label: target.name,
      content: target.value
    });
  }
  handleRemove(index) {
    this.props.onInfoRemove(index);
  }

  render() {
    const { info } = this.props;
    return (
      <div className="gi">
        {info.map(({ label, content }, index) => (
          <div className="gi-item" key={index}>
            <MapField
              label={
                <Input
                  data-index={index}
                  name="label"
                  value={label}
                  onChange={this.handleChange.bind(this)}
                  className=""
                />
              }
              content={
                <Input
                  data-index={index}
                  name="content"
                  value={content}
                  onChange={this.handleChange.bind(this)}
                  className=""
                />
              }
            />
            <Icon
              type="close-circle"
              onClick={this.handleRemove.bind(this, index)}
            />
          </div>
        ))}

        <Button type="primary" onClick={this.add.bind(this)}>
          新增
        </Button>
      </div>
    );
  }
}

export default GoodsInfo;
