/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Button from '@mui/material/Button';
import Main from './main';

export default function Layout(porps: any) {
    
	return (
		<React.Fragment>
			

			<Main {...porps}/>
            
		</React.Fragment>
		
	);
};
