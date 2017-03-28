import React, {Component} from 'react';
import './Bingbing.css';

import ScrollTab from './ScrollTab';

const toronto_map = {
		center: { lat: 43.7367, lng: -79.4838 },
			zoom: 11,
			markers: [{
				key: 1,
				latlng: {
					latitude: 43.6629,
					longitude: -79.3957
				},
				title: 'UoT',
				description: 'This is University of Toronto St George Campus',
				pinColor: 'red'
			}, {
				key: 2,
				latlng: {
					latitude: 43.7735,
					longitude: -79.5019
				},
				title: 'YU',
				description: 'This is York University',
				pinColor: 'red'
			}, {
				key: 3,
				latlng: {
					latitude: 43.6577,
					longitude: -79.3788
				},
				title: 'RU',
				description: 'This is Ryerson University',
				pinColor: 'red'
			}, {
				key: 4,
				latlng: {
					latitude: 43.7340,
					longitude: -79.5955
				},
				title: 'My home',
				description: 'This is my home',
				pinColor: 'blue'
			}]
	}

const panes = [
	{key: 0, title: '首页', iconName: 'home', type: 'front'}, 
	{key: 1, title: '备忘录', iconName: 'list', type: 'third'}, 
	{key: 2, title: '聊天', iconName: 'chat', type: 'second'}, 
	{key: 3, title: '推送', iconName: 'post', type: 'first'},
	{key: 4, title: '地图', iconName: 'map', type: 'map', data: toronto_map}];

export default class Bingbing extends Component {
	render() {
		return(
			<div className="bingbing_container">
				<ScrollTab contents={panes} />
			</div>
			);
	}
}