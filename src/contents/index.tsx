import HelloWorld from './HelloWorld';
import FixedMultiTable from './fixedMultiTable';
import Page from './page';


const contents = [
	{ title: 'Home', path: `${process.env.PUBLIC_URL}`, element: <HelloWorld /> },
	{ title: 'fixedMultiTable', path: `/fixedMultiTable`, element: <FixedMultiTable /> },
	{ title: 'page', path: `/page`, element: <Page /> },

];

export default contents;