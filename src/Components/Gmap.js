import React, {Component} from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Gmap.css';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
	  	{props.markers.map((marker, index) => (
	  		<Marker 
	  			position={{ lat: marker.latlng.latitude, lng: marker.latlng.longitude }}
	  			key={marker.key}
	  			title={marker.title}
	  		/>
  		))}
  </GoogleMap>
));

export default class Gmap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	handleMouseMove(e) {
		e.stopPropagation();
	}

	handleMouseDown(e) {
		e.stopPropagation();
	}

	handleMouseUp(e) {
		e.stopPropagation();
	}

	handleMouseLeave(e) {
		e.stopPropagation();
	}

	handleMouseOut(e) {
		e.stopPropagation();
	}

	handleDragStart(e) {
		e.stopPropagation();
	}

	render() {
			return (
					<div className="map"
						draggable="false"
						onMouseMove={this.handleMouseMove.bind(this)} 
						onDragStart={this.handleDragStart.bind(this)}
						onMouseDown={this.handleMouseDown.bind(this)}
						onMouseUp={this.handleMouseUp.bind(this)}
						onMouseLeave={this.handleMouseLeave.bind(this)}
						draggable="false"
						onMouseOut={this.handleMouseOut.bind(this)}>
						<SimpleMapExampleGoogleMap
					        containerElement={
					          <div style={{ height: `100%` }} />
					        }
					        mapElement={
					          <div  style={{ height: `100%`}} />
					        }
					        center={this.props.data.center}
					        zoom={this.props.data.zoom}
					        markers={this.props.data.markers}
					      />
				      </div>
				);
	}
}