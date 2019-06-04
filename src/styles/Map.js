import React, { Component } from 'react'
import '../styles/map.css'
import mapboxgl from 'mapbox-gl'
//json files in map
import grytaNord from './mapLayers/gryta-nord.json';
import grytaSyd from './mapLayers/gryta-syd.json';
import nedreElvehavn from './mapLayers/nedre-elvehavn.json';

//Redux
import { connect } from "react-redux";
import { addLayer } from '../../actions'

import formatJson from '../utils';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


class Map extends Component{
  constructor(props) {
    super(props);
    this.state = {
      layersInMap: [],
      lng: 10.4,        //Trondheim
      lat: 63.435,
      zoom: 15
    };
  }


  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom
    });
    
    this._map = map;
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', function () {
      this.addDefaultLayers();
    }.bind(this));

     map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

  }
  componentDidUpdate() {
    this.updateMapLayers()
  }

  updateMapLayers(props){
    this.deleteLayers();
    this.addLayers();    
  }

  deleteLayers(){
    debugger
    for (let i = 0; i < this.state.layersInMap.length; i++) {
      if(this._map.getSource(this.state.layersInMap[i].id)){
        this._map.removeLayer(this.state.layersInMap[i].id)
        this._map.removeSource(this.state.layersInMap[i].id)
      }
      if(this._map.getSource(this.state.layersInMap[i].id+'_outline')){
        this._map.removeLayer(this.state.layersInMap[i].id + '_outline')
        this._map.removeSource(this.state.layersInMap[i].id + '_outline')
      }

    }
  }

  addLayers(){
    for (let i = 0; i < this.props.layers.length; i++) {
      let layer = this.props.layers[i]
      if(layer.source)
        this.addVectorLayer(layer)  
      else 
        this.addLayerByType(this.props.layers[i]);
        
    }
    this.state.layersInMap = this.props.layers;
  }

  addLayerByType(layer){
    debugger
    switch (type) {
      case 'Polygon':
        this.addPolygonLayer(layer);
        break;
      case 'MultiPolygon':
        this.addPolygonLayer(layer);
        break;
      case 'MultiLineString':
        this.addLineLayer(layer);
        break;
      case 'Point':
        this.addPointLayer(layer);
        break;
      default:
        console.log('Unidentified layer type!!' + layer.type);
        
    }
  }


  addPointLayer(layer) {
    this._map.addLayer({
      'id': layer.id,
      'type': 'circle',
      'source': {
        'type': 'geojson',
        'data': layer
      },
      'layout': {'visibility': layer.visible },
      'paint': {
        'circle-radius': 5,
        'circle-color': layer.fillColor,
        'circle-opacity': 1
      }
    });
  }


  addLineLayer(layer) {
    let map = this._map
    map.addLayer({
      'id': layer.name,
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': layer
      },
      'layout': {'visibility': layer.visible },
      'paint': {
        'line-color': layer.borderColor,
        'line-opacity': 1,
        'line-width': 2
      }
    });

  }
  

  addPolygonLayer(layer) {
    let map = this._map

    map.addLayer({
      'id': layer.id,
      'type': 'fill',
      'source': {
        'type': 'geojson',
        'data': layer
      },
      'layout': {'visibility': layer.visible },
      'paint': {
        'fill-color': layer.fillColor,
        'fill-opacity': layer.fillOpacity
      }
    });

    map.addLayer({
      'id': layer.id + '_outline',
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': layer
      },
      'layout': {'visibility': layer.visible },
      'paint': {
        'line-color': layer.borderColor,
        'line-opacity': 1 ,
        'line-width': 1
      }
    });
  }

  addVectorLayer(layer){ 
    this._map.addLayer({
      'id': layer.id,
      'type': 'fill',
      'source': {
        type: 'vector',
        url: layer.source
      },
      'source-layer': layer.sourceLayer,
      'layout': {'visibility': layer.visible },
      'paint': {
        'fill-color': layer.fillColor,
        'fill-opacity': layer.fillOpacity,
      }
    })
  }


  addDefaultLayers(){
    let formated = formatJson(nedreElvehavn,'Nedre elvehavn', true)
    this.props.addLayer(formated) 
    let format2 = formatJson(grytaNord, 'Gryta nord', true)
    this.props.addLayer(format2) 
    let format3 = formatJson(grytaSyd, 'Gryta syd', true)
    this.props.addLayer(format3) 

  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
        <div className="map" ref={el => this.mapContainer = el} />
    );
  }
}




const mapStateToProps = (state) => ({
  layers: state.layers
});

const mapDispatchToProps = {
  addLayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);