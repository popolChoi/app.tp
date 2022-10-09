import React from 'react';
import Main from './main';

const toplist = {
	right : [{text: 'Choi\'s Portfolio',  href: process.env.PUBLIC_URL}],
	left:[
		{text: 'mui',  href: 'https://mui.com/'},
		{text: 'popolChoi.github.io/app.tp',  href: 'https://popolChoi.github.io/app.tp'}
	]
};

export default function Layout(porps: any) {
	return (
		<React.Fragment>
			<Main {...porps} toplist={toplist}/>
		</React.Fragment>
		
	);
};
