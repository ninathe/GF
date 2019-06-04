import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';

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
        <ProductHero clickHandler ={this.props.clickHandler}/>
        <ProductValues />
      </React.Fragment>
    );
  }
}

export default withRoot(Index);
// export default withStyles(styles, { withTheme: true })(Sidebar);