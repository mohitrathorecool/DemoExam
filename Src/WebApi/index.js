import  { Component } from 'react';


const baseUrl='https://5f15e11da346a00016738906.mockapi.io/api/post/Listing';


export default class WebApi extends Component {


	static api_get_list( method, body){
       
		return fetch(baseUrl, {
		  method: method,
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body:body
		})
	}


	static api_postdata(method, body){
		
		console.log(body);
		
		return fetch(baseUrl, {
		  method: method,
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		  },
		  body:body
		})
	}

}