import styled from "styled-components";
import React, {Component} from 'react';
import MapContainer from './map/Map'

const MapWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: stretch;
`;

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {
      receivedJson: this.props.receivedJson,
      layers: [],
    };
  }

  render() {
    return (
      <div>
        <MapWrapperDiv>
          <MapContainer />
        </MapWrapperDiv> 
      </div> 
    );
  }
}


export default MapWrapper;