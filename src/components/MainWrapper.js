import styled from "styled-components";
import React, {Component} from 'react';
import MapContainer from './map/Map'
import Frontpage from './frontpage'

const MapWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: stretch;
`;

class MainWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      showMap: false,
    };
  }

  viewMap = () => {
    this.setState({ showMap: true });
  };
  isLoggedIn=()=>{
    return this.state.showMap
  }

  render() {
    return (
      <React.Fragment>
      {this.isLoggedIn() ? (
        <MapWrapperDiv>
          <MapContainer />
        </MapWrapperDiv> 
      
      ) : (
        <Frontpage clickHandler ={this.viewMap}/>
      )}
      </React.Fragment>
    )}
}


export default MainWrapper;