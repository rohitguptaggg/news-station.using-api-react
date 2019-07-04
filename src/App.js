//import React, { Component } from 'react';
import React from 'react';
import Body from "./component/Body";
import Sidenav from "./component/Sidenav";
import Header from "./component/Header";


class App extends React.Component {
	render() {
		return (
			 
			<div className="">
				<Header/>
				<div className="">
				<div className="indeterminate"></div>
				</div>
				
				<div className="row">
					<div className='col l3'>
						
					<Sidenav/>
					</div>
					<div className='col l8'>
					<Body/>
					</div>
				</div>
				
				
				
				
			</div>
			
					
		);
	}
}

export default App;