import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Header from './modules/views/Header';
import Steps from './modules/views/Steps';

class Index extends React.Component {
  state = {
    open: false,
  };

  viewMap = () => {
    alert("viewMap")
  };

  render() {
    //GUI
    return (
      <React.Fragment>
        <Header clickHandler ={this.props.clickHandler}/>
        <Steps />
      </React.Fragment>
    );
  }
}

export default withRoot(Index);
// export default withStyles(styles, { withTheme: true })(Sidebar);