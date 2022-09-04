import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Пуери',
      imageUrl:
        'https://www.spiceandtea.com/media/catalog/product/cache/fb0a90b8e26ceb5370e874c9b332d3b2/t/-/t-0516182_1.jpg',
    },
    {
      id: 2,
      title: 'Улуни',
      imageUrl:
        'https://factum-info.net/images/1_Fakty/4_Eda/70_2_oolong-1.jpg',
    },
    {
      id: 3,
      title: 'Червоний чай',
      imageUrl:
        'https://cha.com.ua/wp-content/uploads/2020/10/moli-lo-3-278x300.jpg',
    },
    {
      id: 4,
      title: 'Зелений чай',
      imageUrl:
        'https://www.spiceandtea.com/media/catalog/product/cache/fb0a90b8e26ceb5370e874c9b332d3b2/s/k/sku-579.jpg',
    },
    {
      id: 5,
      title: 'Білий та Жовтий чай',
      imageUrl:
        'https://blog.yanhoutang.com/wp-content/uploads/2019/08/white-tea-678x381.jpg',
    },
    {
      id: 6,
      title: "В'язаний чай",
      imageUrl:
        'https://thumbs.dreamstime.com/b/%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%86%D0%B2%D0%B5%D1%82%D1%8F-%D1%87%D0%B0%D0%B9-%D0%B2-%D1%81%D1%82%D0%B5%D0%BA-%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%87%D0%B0%D0%B9%D0%BD%D0%B8%D0%BA%D0%B5-57744055.jpg',
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
