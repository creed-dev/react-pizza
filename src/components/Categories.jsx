import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryAC } from '../redux/filters-reducer';

const Categories = props => {
	const dispatch = useDispatch();

	const onSelectCategory = index => {
		dispatch(setCategoryAC(index));
	};

	const onSelectCategoryAll = () => {
		dispatch(setCategoryAC(null));
	};

	return (
		<div className="categories">
			<ul className="categories__list">
				<li
					className={classNames(
						{
							active: props.activeCategory === null,
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
									active: props.activeCategory === index,
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
