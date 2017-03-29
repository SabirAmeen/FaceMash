import React from 'react';
import ReactDom from 'react-dom';
import Activity from './activity.jsx';
import Status from './status.jsx';
import $ from 'jquery';

export default class extends React.Component{
	constructor(props){
		super(props);
		this.state={
			activityVisible: false,
			images:[
				{
					id: 1,
					name: "",
					address:"images/sb.jpg",
					hits: 0
				},
				{
					id: 1,
					name:"",
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
	fetchImage(){
		var count1 = this.randomize(5,1);
		var count2 = this.randomize(5,1);
		while(count1==count2){
			count2 = this.randomize(5,1)
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
							name: response.first[0].name,
							address: response.first[0].Address,
							hits: response.first[0].hits
						},
						{
							id: response.second[0].id,
							name: response.second[0].name,
							address: response.second[0].Address,
							hits: response.second[0].hits
						}
					]
				});
				this.fetchStatus();
			}.bind(this),
			error:function(err){
				console.log(err);
			}
		})
	}
	fetchStatus(){
		$.ajax({
			url: '/fetch',
			type: "GET",
			success:function(response){
				this.setState({
					data: response
				});
			}.bind(this),
			error:function(err){
				console.log(err);
			}
		})
	}
	componentDidMount(){
		this.fetchImage();
	}
	update(id,hits,event){
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
		this.fetchImage();
	}
	start(){
		this.setState({
			activityVisible: true
		});
	}

	render(){
		return(
			<div className="container">
				<h3>“Mirror, mirror, on the wall - who is the strongest of them all?”</h3>
				{
					this.state.activityVisible?<div className="main"><Activity update={this.update.bind(this)} img={this.state.images} /><Status val={this.state.data} /></div>:<div id="start-btn"><button className="waves-effect waves-light btn-large" onClick={this.start.bind(this)}>Button</button></div>
				}
			</div>
		)
	}
}