import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryAC } from '../redux/filters-reducer';

const Categories = ({ activeCategory }) => {
	const dispatch = useDispatch();

	const categoriesItems = [
		'Мясные',
		'Вегетарианские',
		'Гриль',
		'Острые',
		'Закрытые',
	];

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
							active: activeCategory === null,
						},
						'categories__item'
					)}
					onClick={() => onSelectCategoryAll()}
				>
					Все
				</li>
				{categoriesItems.map((category, index) => {
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
