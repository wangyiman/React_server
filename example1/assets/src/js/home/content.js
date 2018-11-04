import React, { Component, PropTypes } from 'react';

class Content extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {
    const { mydata } = this.props;

    return (
      <div>hello：{mydata.name}</div>
    );
  }
}

export default Content;