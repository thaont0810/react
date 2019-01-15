import React from "react";

class Slide extends React.Component {
  render() {
    const { image } = this.props;
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 60%"
    };
    return <div className="slide" style={styles} />;
  }
}

export default Slide;
