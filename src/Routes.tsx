/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Layout from './layout';
import contents from './contents';

function RoutesFunction(){
	return (
		<BrowserRouter 
			// basename={initial}
		> 
			<Layout 				
				links={contents.map((e, i) => <Link key={i} to={e.path} className="!">{e.title}</Link>)}
				cont={
					<React.Fragment>
						<Routes>
							<Route path={'/'} element={contents[0].element} />
							{contents.map((e, i) => <Route  key={i} path={e.path} element={e.element} /> )}
						</Routes>
					</React.Fragment>
			}/>
		</BrowserRouter> 
		
	
            
	) 
}

export default RoutesFunction;

