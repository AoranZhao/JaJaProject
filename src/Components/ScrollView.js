import React, {Component} from 'react';
import './ScrollView.css';

export default class ScrollView extends Component {

	static propTypes = {
		trigger_dst: React.PropTypes.number,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.element
			])
	}

	constructor() {
		super();
		this.state = {
			clicked: false,
			x: 0,
			y: 0,
			d_s_x: 0,
			d_s_y: 0,
			d_e_x: 0,
			d_e_y: 0,
			doing: 'no',
			m_s_x: 0,
			m_s_y: 0,
			m_e_x: 0,
			m_e_y: 0,
			move_dst: 0,
			recent_move_dst: 0,
			t_x: 0,
			t_y: 0,
			t_s_x: 0,
			t_s_y: 0,
			t_e_x: 0,
			t_e_y: 0,
			t_c_x: 0,
			t_c_y: 0
		}
	}

	traggerPage() {
		if(Math.abs(this.state.recent_move_dst) > this.props.trigger_dst) {
			if(this.state.recent_move_dst < 0) this.props.trigger_forward();
			else this.props.trigger_back();
			console.log("Pagging!!");
		} else {
			this.props.trigger_offset(0);
			console.log("Not Pagging...");
		}
	}

	handleMouseMove(e) {
		var startX = this.state.m_s_x;
		var dst = 0;
		if(this.state.clicked) dst = e.clientX - startX;
		this.props.trigger_offset(dst / 50);
		this.setState({
			x: e.clientX,
			y: e.clientY,
			move_dst: dst
		})
	}

	handleDragStart(e) {
		this.setState({
			d_s_x: e.clientX,
			d_s_y: e.clientY
		})
	}

	handleMouseDown(e) {
		this.setState({
			clicked: true,
			m_s_x: e.clientX,
			m_s_y: e.clientY,
		})
	}

	handleMouseUp(e) {
		var current_move_dst = this.state.move_dst;
		this.setState({
			clicked: false,
			m_e_x: e.clientX,
			m_e_y: e.clientY,
			move_dst: 0,
			recent_move_dst: current_move_dst
		}, () => {
			this.traggerPage();
		})
	}

	handleMouseLeave(e) {
		var current_move_dst = this.state.move_dst;
		this.setState({
			clicked: false,
			m_e_x: e.clientX,
			m_e_y: e.clientY,
			move_dst: 0,
			recent_move_dst: current_move_dst
		}, () => {
			this.traggerPage();
		})
	}

	handleTouchStart(e) {
		this.setState({
			t_s_x: e.touches[0].clientX,
			t_s_y: e.touches[0].clientY,
			t_x: e.touches[0].clientX,
			t_y: e.touches[0].clientY
		})
	}

	handleTouchMove(e) {
		this.setState({
			t_x: e.touches[0].clientX,
			t_y: e.touches[0].clientY,
			move_dst: e.touches[0].clientX - this.state.t_s_x
		}, () => {
			this.traggerPage();
		})
	}

	handleTouchEnd(e) {
		var current_move_dst = this.state.move_dst;
		this.setState({
			t_e_x: e.touches[0].clientX,
			t_e_y: e.touches[0].clientY,
			move_dst: 0,
			recent_move_dst: current_move_dst
		}, () => {
			this.traggerPage();
		})
	}

	handleTouchCancel(e) {
		var current_move_dst = this.state.move_dst;
		this.setState({
			t_c_x: e.touches[0].clientX,
			t_c_y: e.touches[0].clientY
		}, () => {
			this.traggerPage();
		})
	}

	render() {
		return(
			<div 
				className="scrollview" 
				style={this.props.style}
				onMouseMove={this.handleMouseMove.bind(this)} 
				onDragStart={this.handleDragStart.bind(this)}
				onMouseDown={this.handleMouseDown.bind(this)}
				onMouseUp={this.handleMouseUp.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				draggable="true"
				onTouchMove={this.handleTouchMove.bind(this)}
				onTouchStart={this.handleTouchStart.bind(this)}
				onTouchEnd={this.handleTouchEnd.bind(this)}
				onTouchCancel={this.handleTouchCancel.bind(this)}
				>
				{this.props.children}
			</div>
			);
	}
}