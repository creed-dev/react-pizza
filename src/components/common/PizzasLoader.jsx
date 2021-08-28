import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzasLoader = props => (
	<ContentLoader
		speed={2}
		width={280}
		height={457}
		viewBox="0 0 280 457"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="134" cy="121" r="119" />
		<rect x="0" y="260" rx="5" ry="5" width="280" height="25" />
		<rect x="0" y="301" rx="15" ry="15" width="280" height="84" />
		<rect x="0" y="420" rx="15" ry="15" width="89" height="27" />
		<rect x="129" y="406" rx="25" ry="25" width="151" height="44" />
	</ContentLoader>
);

export default PizzasLoader;
