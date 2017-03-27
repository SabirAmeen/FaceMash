import React from 'react';
import ReactDom from 'react-dom';
import Activity from './activity.jsx';
import $ from 'jquery';

export default class extends React.Component{
	constructor(props){
		super(props);
		this.state={
			activityVisible: false,
			images:[
				{
					id: 1,
					address:"images/sb.jpg",
					hits: 0
				},
				{
					id: 1,
					address: "images/sb.jpg",
					hits: 0
				}
			],
			data:[]
		}
	}
	randomize(max, min){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	componentDidMount(){
		var count1 = this.randomize(2,1);
		var count2 = this.randomize(2,1);
		while(count1==count2){
			count2 = this.randomize(2,1)
		}

		$.ajax({
			url: '/scripts',
			type: "GET",
			data: ({first: count1, second: count2}),
			success:function(response){
				this.setState({
					images:[
						{
							id: response.first[0].id,
							address: response.first[0].Address,
							hits: response.first[0].hits
						},
						{
							id: response.second[0].id,
							address: response.second[0].Address,
							hits: response.second[0].hits
						}
					]
				});
			}.bind(this),
			error:function(err){
				console.log(err);
			}
		})
	}
	update(id,hits){
		hits = hits+1;
		$.ajax({
			url: '/update',
			type: "GET",
			data: ({id: id, hits:hits}),
			success:function(response){
				console.log("set")
			}.bind(this),
			error:function(err){
				console.log(err);
			}
		})
	}
	start(){
		this.setState({
			activityVisible: true
		});
	}

	render(){
		return(
			<div className="container">
				{
					this.state.activityVisible?<Activity update={this.update} img={this.state.images} />:<div id="start-btn"><button className="waves-effect waves-light btn-large" onClick={this.start.bind(this)}>Button</button></div>
				}
			</div>
		)
	}
}