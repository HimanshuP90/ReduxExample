import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createPosts } from '../actions/postAction';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.createPosts(post);
		/* 
		Goes in createPost action
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method:'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(post)
		})
		.then(res => res.json())
		.then(data => console.log(data));

		*/
	}

	render(){
		return(
			<div>
			 <h1>Add Post</h1>
			 <form onSubmit={this.onSubmit}>
			  <div>
			   <label>Title: </label>
			   <br/>
			   <input
			   		type="text" name="title"
			   		onChange={this.onChange}
			    	value= {this.state.value}
			   	/>
			  </div>
			  <div>
			   <label>Body: </label>
			   <br/>
			   <input
			   		type="text"
			   		name="body"
			   		onChange={this.onChange}
			   		value= {this.state.value}
			   />
			  </div>
			  <br/>
			  <button type="submit">Submit</button> 
			 </form>
			</div>
		);
	}
} 

PostForm.propTypes = {
	createPosts: PropTypes.func.isRequired,
	post: PropTypes.array.isRequired
}

export default connect(null, { createPosts } )(PostForm);