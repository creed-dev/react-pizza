import React from 'react';
import Content from './components/Content';
import Header from './components/Header';

const App = props => {
	return (
		<div className="wrapper">
			<Header />
			<Content />
		</div>
	);
};

export default App;
