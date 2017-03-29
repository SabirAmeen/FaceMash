import React from 'react';
import ReactDom from 'react-dom';

export default class extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="activity-section">
				<div className="images-wrapper">	
					<section>
						<div className="card-image pics" id={this.props.img[0].id} onClick={(event)=>this.props.update(this.props.img[0].id,this.props.img[0].hits,event)}>
	              			<img src={this.props.img[0].address}/>
	              			<span className="card-title">{this.props.img[0].name}</span>
	           			</div>
	           		</section>
	           		<section>
	           			<div className="card-image pics" id={this.props.img[1].id} onClick={(event)=>this.props.update(this.props.img[1].id,this.props.img[1].hits,event)}>
	              			<img src={this.props.img[1].address}/>
	              			<span className="card-title">{this.props.img[1].name}</span>
	           			</div>
	           		</section>
				</div>
			</div>
		)
	}
}