import React, {Component} from 'react';
import './ScrollTab.css';

import Tab from './Tab';
import Pane from './Pane';
import ScrollView from './ScrollView';

import Slider from 'react-motion-slider';

export default class ScrollTab extends Component {
	contents_len = 0;

	static propTypes = {
		contents: React.PropTypes.array
	}

	constructor() {
		super();
		this.state = {
			selected: 0,
			offset: 0
		}
	}

	/*
	return(
			<Pane key={index} content={item} style={{width: `${100 / this.contents_len}%`}} />
			);
	*/

	_panes(item, index) {
		return(
			<Pane key={index} content={item} style={{width: `${100 / this.contents_len}%`}} />
			);
	}

	_tabs(item, index) {
		return(
			<Tab 
				key={index} 
				index={index}
				content={item} 
				style={{width: `${Math.ceil(90 / this.contents_len)}%`}} 
				handleOnClick={this._handleTabOnClick.bind(this)}/>
			);
	}

	_renderPanes() {
		return(
			<div className="scrolltabs_panes" ref="panes">
				<ScrollView 
					style={{width: `${this.contents_len * 100}%`, transform: `translateX(${100 / this.contents_len * -1 * this.state.selected + this.state.offset}%)`}} 
					trigger_dst={300}
					trigger_forward={this.nextPane.bind(this)}
					trigger_back={this.prevPane.bind(this)}
					trigger_offset={this.triggerOffset.bind(this)}>
					{this.props.contents.map(this._panes.bind(this))}
				</ScrollView>
			</div>
			);
	}

	_renderTabs() {
		return(
			<div className="scrolltabs_tabs">
				<div className="scrolltabs_tab">
					{this.props.contents.map(this._tabs.bind(this))}
				</div>
			</div>
			);
	}

	_handleTabOnClick(index) {
		this.jumpToPane(index);
	}

	triggerOffset(x) {
		this.setState({
			offset: x
		})
	}

	nextPane() {
		var currentIndex = this.state.selected;
		if(currentIndex < this.contents_len - 1) {
			this.setState({
				selected: ++currentIndex
			});
		}
	}

	prevPane() {
		var currentIndex = this.state.selected;
		if(currentIndex > 0) {
			this.setState({
				selected: --currentIndex
			});
		}
	}

	jumpToPane(index) {
		this.setState({
			selected: index
		})
	}

	render() {
		this.contents_len = this.props.contents.length;
		return(
			<div className="scrolltabs">
				{this._renderPanes()}
				{this._renderTabs()}
			</div>
			);
	}
}