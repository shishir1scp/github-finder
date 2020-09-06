import React, { Component } from "react";

class UserItem extends Component {
	render() {
		const { login, avatar_url, html_url } = this.props.user;
		//here we are destructuring
		//here we are pulling stuffs(login,avatar_url,html_url) out from the object
		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt=''
					className='round-img'
					style={{ width: "60px" }}
				/>
				<h3>{login}</h3>
				<div>
					<a href={html_url} className='btn btn-dark btn-sm.my-1'>
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
