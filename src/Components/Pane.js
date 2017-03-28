import React, {Component} from 'react';
import './Pane.css';

import Front from './Front';
import First from './First';
import Second from './Second';
import Third from './Third';
import Gmap from './Gmap';

export default class Pane extends Component {
	displayName = 'Pane';

	render() {
		switch(this.props.content.type) {
			case "front": return(
				<div className="pane" style={this.props.style}>
					<Front />
				</div>
				);
			case "first": return(
				<div className="pane" style={this.props.style}>
					<First />
				</div>
				);
			case "second": return(
				<div className="pane" style={this.props.style}>
					<Second />
				</div>
				);
			case "third": return(
				<div className="pane" style={this.props.style}>
					<Third />
				</div>
				);
			case "map": return(
				<div className="pane" style={this.props.style}>
					<Gmap data={this.props.content.data} />
				</div>
				);
			default: return(
				<div className="pane" style={this.props.style}>
					<p>{this.props.content.color}</p>
				</div>
				);
		}
	}
}