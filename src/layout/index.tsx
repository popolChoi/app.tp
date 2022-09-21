import React from 'react';
import Main from './main';

export default function Layout(porps: any) {
	return (
		<React.Fragment>
			<Main {...porps}/>
		</React.Fragment>
		
	);
};
