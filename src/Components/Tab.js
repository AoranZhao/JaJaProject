import React, {Component} from 'react';
import './Tab.css';

import IoHome from 'react-icons/lib/io/home';
import IoHeart from 'react-icons/lib/io/heart';
import IoMap from 'react-icons/lib/io/map';
import IoPerson from 'react-icons/lib/io/person';

import IoList from 'react-icons/lib/io/ios-list';
import IoChat from 'react-icons/lib/io/chatboxes';
import IoPost from 'react-icons/lib/io/document-text';

export default class Tab extends Component {

	_getIcon(iconName, size) {
		switch (iconName) {
			case 'home': return (<IoHome size={size} className="icon" />);
			case 'heart': return (<IoHeart size={size} className="icon" />);
			case 'map': return (<IoMap size={size} className="icon" />);
			case 'person': return (<IoPerson size={size} className="icon" />);
			case 'list': return (<IoList size={size} className="icon" />);
			case 'chat': return (<IoChat size={size} className="icon" />);
			case 'post': return (<IoPost size={size} className="icon" />);
			default:
				return (<IoHome size={size} className="icon" />);
		}
	}

	// _renderTab() {
	// 	return(
	// 		<div className="tabs_labels">
	// 			<p>{this.props.content.title}</p>
	// 			{this._getIcon(this.props.content.iconName, 30)}
	// 		</div>
	// 		);
	// }

	render() {
		return (
			<div className="tab" style={this.props.style}>
				<a 
					href="#" 
					className="tab_a"
					onClick={() => this.props.handleOnClick(this.props.index)}
					>
					<p>{this.props.content.title}</p>
					{this._getIcon(this.props.content.iconName, 30)}
				</a>
			</div>
			);
	}
}