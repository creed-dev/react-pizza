import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryAC } from '../redux/categories-reducer';

const Categories = props => {
	const dispatch = useDispatch();
	const [activeCategory, setActiveCategory] = useState(null);

	const onSelectCategory = index => {
		setActiveCategory(index);
		dispatch(setCategoryAC(index + 1));
	};

	const onSelectCategoryAll = () => {
		setActiveCategory(null);
		dispatch(setCategoryAC(0));
	};

	return (
		<div className="categories">
			<ul className="categories__list">
				<li
					className={classNames(
						{
							active: activeCategory === null,
						},
						'categories__item'
					)}
					onClick={() => onSelectCategoryAll()}
				>
					Все
				</li>
				{props.items.map((category, index) => {
					return (
						<li
							key={`${category}_${index}`}
							className={classNames(
								{
									active: activeCategory === index,
								},
								'categories__item'
							)}
							onClick={() => onSelectCategory(index)}
						>
							{category}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Categories;
