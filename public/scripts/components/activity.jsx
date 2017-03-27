import React from 'react';
import ReactDom from 'react-dom';

export default class extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="images-wrapper">	
				<section>
					<div className="card-image pics" id={this.props.img[0].id} onClick={()=>this.props.update(this.props.img[0].id,this.props.img[0].hits)}>
              			<img src={this.props.img[0].address}/>
              			<span className="card-title">Sabir Ameen</span>
           			</div>
           		</section>
           		<section>
           			<div className="card-image pics" id={this.props.img[1].id} onClick={()=>this.props.update(this.props.img[1].id,this.props.img[1].hits)}>
              			<img src={this.props.img[1].address}/>
              			<span className="card-title">Sabir Ameen</span>
           			</div>
           		</section>
			</div>
		)
	}
}