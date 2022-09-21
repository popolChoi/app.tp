/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Layout from './layout';


const Router = [
	{ title: 'Home', path: `${process.env.PUBLIC_URL}`, element: <Home /> }
];


function Home() {return <div>Hello World</div>;};

function RoutesFunction(){

	return (
		<BrowserRouter 
			// basename={initial}
		> 



			<Layout 				
				links={Router.map((e, i) => <Link key={i} to={e.path} className="!">{e.title}</Link>)}
				cont={
					<React.Fragment>
						<Routes>
							<Route path={'/'} element={Router[0].element} />
							{Router.map((e, i) => <Route  key={i} path={e.path} element={e.element} /> )}
						</Routes>
					</React.Fragment>
				}/>
		</BrowserRouter> 
		
	
            
	) 
}

export default RoutesFunction;

