import React, { Component } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

class ScrollToTopBtn extends Component {
  state = {
    is_visible: false,
  };

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 50) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-icon">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <div className="scroll-button">
              <ArrowUpwardIcon />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ScrollToTopBtn;
