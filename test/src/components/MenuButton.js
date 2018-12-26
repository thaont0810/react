import React, {Component}  from "react";

// const MenuButton = (props) => (
//   <div className="menuIcon">
//   {props.name}
//     <div className="dashTop"></div>
//     <div className="dashBottom"></div>
//     <div className="circle"></div>
//   </div>
// )

class MenuButton extends Component {
  render() {
    const { menu } = this.props;

    return (
      <div className="menuIcon">
        {this.props.name}
        <div className="dashTop" />
        <div className="dashBottom" />
        <div className="circle" />
      </div>
    );
  }
}

export default MenuButton;
