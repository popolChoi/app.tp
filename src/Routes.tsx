/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import JsonServerTest from './JsonServerTest';
// import ReduxTest from './ReduxTest';
// import Button from '@mui/material/Button';

// import { RootState } from './store';
// import { login } from './store/reducer';

import Layout from './layout';

// import { useSelector, useDispatch } from 'react-redux'

const Router = [
	{ title: 'Home', path: '/', element: <Home /> }
];


function Home() {return <div>Hello World</div>;};

function RoutesFunction(){
	// const dispatch = useDispatch();
	// const user = useSelector((state: RootState) => state.user.value)



	return (
		<BrowserRouter 
			// basename={initial}
		> 
			

			<Layout 
				// <Link to="/">Home</Link>
				
				links={Router.map((e, i) => <Link key={i} to={e.path} className="!">{e.title}</Link>)}
		
				cont={
					<React.Fragment>

						{/* <button onClick={() => {
					dispatch(login({name: "내 이름", age: 20, email: "email@gmail.com"}))
				}}>Login</button>
				{user.age} */}
					


						<Routes>
							{/* <Route path="/" element={<Home />} /> */}
							{Router.map((e, i) => <Route  key={i} path={e.path} element={e.element} /> )}
						</Routes>
					</React.Fragment>
			

				
				}/>
		
		</BrowserRouter> 
		
	
            
	) 
}

export default RoutesFunction;

