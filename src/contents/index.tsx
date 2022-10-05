import HelloWorld from './HelloWorld';
import FixedMultiTable from './fixedMultiTable';

const contents = [
	{ title: 'Home', path: `${process.env.PUBLIC_URL}`, element: <HelloWorld /> },
	{ title: 'fixedMultiTable', path: `/fixedMultiTable`, element: <FixedMultiTable /> }

];

export default contents;