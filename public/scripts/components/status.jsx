import React from 'react';
import ReactDom from 'react-dom';

export default class extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let list = this.props.val;
		return(
			<ul className="status-section">
				<li><h6>Hercules of Qburst</h6></li>
				{
					list.map(function(item, index){
						return(
							<li key={index}>
								<span className="status-name">{item.name}</span>
								<span className="status-hits">{item.hits}</span>
							</li>
						)
					}.bind(this))
				}
			</ul>
		)
	}
}