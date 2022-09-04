import { Link } from 'react-router-dom';

import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;

  let categoryLink = '';
  switch (id) {
    case 1:
      categoryLink = 'пуери';
      break;

    case 2:
      categoryLink = 'улуни';
      break;
    case 3:
      categoryLink = 'червоний';
      break;
    case 4:
      categoryLink = 'зелений';
      break;
    case 5:
      categoryLink = 'білий';
      break;
    case 6:
      categoryLink = "в'язаний";
      break;

    default:
      break;
  }

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link to={`shop/${categoryLink}`} className='category-body-container'>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default CategoryItem;
