import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
