import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = props => {
	return (
		<div className="categories">
			<ul className="categories__list">
				<NavLink
					to="/all"
					className="categories__item"
					activeClassName="active"
				>
					Все
				</NavLink>
				<NavLink
					to="/meat"
					className="categories__item"
					activeClassName="active"
				>
					Мясные
				</NavLink>
				<NavLink
					to="/vegan"
					className="categories__item"
					activeClassName="active"
				>
					Вегетарианские
				</NavLink>
				<NavLink
					to="/grill"
					className="categories__item"
					activeClassName="active"
				>
					Гриль
				</NavLink>
				<NavLink
					to="/hot"
					className="categories__item"
					activeClassName="active"
				>
					Острые
				</NavLink>
				<NavLink
					to="/closed"
					className="categories__item"
					activeClassName="active"
				>
					Закрытые
				</NavLink>
			</ul>
		</div>
	);
};

export default Categories;
