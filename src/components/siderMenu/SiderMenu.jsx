import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Icon, Button } from "zent";
import "./SiderMenu.scss";

class SiderMenu extends Component {

  switchTab(index) {
    this.props.onSwitchTab(index)
  }
  render() {
    const routes = this.props.routes;
    return (
      <div className="sidernav">
        {routes.map(({ path, name,selected,icon }, index) => (
          <Link className={`sidernav-item ${selected? 'selected':''}`} onClick={this.switchTab.bind(this,index)} key={index} to={path}>
            <Icon className="sidernav-icon" type={icon} />
            {name}
          </Link>
        ))}
      </div>
    );
  }
}

export default SiderMenu;
