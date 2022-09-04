const SHOP_DATA = [
  {
    title: 'Пуери',
    items: [
      {
        id: 1,
        name: 'Шу Пуер 7562 2013 рік 250 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/ef720e25-4bce-449b-9c15-078e56763d92.jpg',
        price: 249,
      },
      {
        id: 2,
        name: 'Шу Пуер Гун Бін фабрика Ча Шу Ван 2018 рік 357 г',
        imageUrl:
          'https://static.tildacdn.com/tild3335-3065-4664-b633-343331343736/24720A0F-9A4B-4E37-9.jpg',
        price: 599,
      },
      {
        id: 3,
        name: 'Шу пуер 7262 Ча Шу Ван 2016 рік 357 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/5ee5a199-52bd-46f8-a6be-eaa021a631cf.jpg',
        price: 399,
      },
      {
        id: 4,
        name: 'Шу Пуер Цзин Я 100 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/df7c785a-68f5-4037-a2ba-6a12c8780d55.jpg',
        price: 199,
      },
      {
        id: 5,
        name: 'Шу пуер «Весняний світанок» / Чунь Сяо (1701) 2017 рік 357 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/2e726b69-456a-46c0-8c6d-a9138955d87e.jpg',
        price: 999,
      },
      {
        id: 6,
        name: 'Шу пуер Лао Тун Чжі 9978 (Старий Товариш) 2020 рік 357 г',
        imageUrl:
          'https://static.tildacdn.com/tild6130-3936-4534-b061-383131633637/IMG_5128.jpeg',
        price: 1199,
      },
      {
        id: 7,
        name: 'Шу пуер Гун Тін «Золотий Дракон» 2018 рік 357 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/2e31c8ba-eae1-4d18-8b35-cb48fffee96c.jpg',
        price: 1199,
      },
      {
        id: 8,
        name: 'Міні сет пуеру від Ча Шу Ван',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/2afcf4d9-2191-442c-ae94-46e8f7c80f29.jpg',
        price: 1199,
      },
      {
        id: 9,
        name: 'Шу Пуер Гун Тін «2101» Лімітована Серія, фабрика Ча Шу Ван, 100 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/acfab612-abbd-471e-bb48-ad0b81f32707.jpg',
        price: 449,
      },
    ],
  },
  {
    title: 'Улуни',
    items: [
      {
        id: 10,
        name: 'Світлий улун Те Гуань Інь Цин Сян Преміум',
        imageUrl:
          'https://static.tildacdn.com/tild6465-3334-4066-b236-656665346134/IMG-1960.jpg',
        price: 299,
      },
      {
        id: 11,
        name: 'Темний улун Да Хун Пао пресований плитка 100 г',
        imageUrl: 'https://images.ua.prom.st/2132961603_da-hun-pao.jpg',
        price: 299,
      },
      {
        id: 12,
        name: 'Дун Дін Тайванський улун з Морозного Піка',
        imageUrl: 'https://images.ua.prom.st/2343300367_dun-din-tajvanskij.jpg',
        price: 799,
      },
      {
        id: 13,
        name: 'Габа Смарагдовий Алішань',
        imageUrl:
          'https://images.ua.prom.st/2092610664_kitajskij-chaj-gaba.jpg',
        price: 799,
      },
      {
        id: 14,
        name: 'Світлий улун Весна чотирьох сезонів / Си Цзи Чунь',
        imageUrl:
          'https://images.ua.prom.st/2376466584_vesna-chetyryoh-sezonov.jpg',
        price: 549,
      },
      {
        id: 15,
        name: 'Габа бурштиновий (Тайвантский улун) original',
        imageUrl:
          'https://static.tildacdn.com/tild3530-3262-4633-b331-623863643536/5807D044-EDFD-4FFB-B.jpeg',
        price: 799,
      },
      {
        id: 16,
        name: 'Світлий улун Преміум Женьшень',
        imageUrl:
          'https://static.tildacdn.com/tild6532-3532-4138-b962-306531333036/photo.JPG',
        price: 599,
      },
      {
        id: 17,
        name: 'Темний улун Чорний Дракон',
        imageUrl:
          'https://images.ua.prom.st/1906647959_kitajskij-chaj-chernyj.jpg',
        price: 499,
      },
      {
        id: 18,
        name: 'Світлий улун Те Гуань Інь Ван Ци Лань (Королевський Те Гуань Інь, Чарівна Орхідея)',
        imageUrl:
          'https://static.tildacdn.com/tild3730-6239-4765-b732-636463373734/IMG_5196.jpeg',
        price: 999,
      },
    ],
  },
  {
    title: 'Червоний',
    items: [
      {
        id: 19,
        name: 'Червоний чай Дянь Хун з дерев Гу Шу 100 г',
        imageUrl: 'https://images.ua.prom.st/2380339426_krasnyj-chaj-dyan.jpg',
        price: 299,
      },
      {
        id: 20,
        name: 'Бан Чжан Гу Шу Хун Ча',
        imageUrl:
          'https://static.tildacdn.com/tild3437-6239-4334-b061-623935626563/9EC4189C-4A2B-4E79-8.jpeg',
        price: 699,
      },
      {
        id: 21,
        name: 'Червоний чай Цзінь Цзюнь Мей (Золоті Брови)',
        imageUrl:
          'https://images.ua.prom.st/2328957224_kitajskij-chaj-tszin.jpg',
        price: 649,
      },
      {
        id: 22,
        name: 'Червоний чай Сун Чжень Хун Ча («Соснові Голки»)',
        imageUrl:
          'https://static.tildacdn.com/tild6464-6237-4565-a334-396163376235/IMG_9813.jpeg',
        price: 349,
      },
      {
        id: 23,
        name: 'Цзинь Цзюнь Мей (Золоті Брови, Вищий сорт), Уішань, 5 г',
        imageUrl:
          'https://static.tildacdn.com/tild3230-3137-4335-a237-663163323538/2863082201_w1280_h12.jpg',
        price: 59,
      },
    ],
  },
  {
    title: 'Зелений',
    items: [
      {
        id: 24,
        name: 'Зелений чай Бі Ло Чунь',
        imageUrl: 'https://images.ua.prom.st/1557419679_kitajskij-chaj-bi.jpg',
        price: 499,
      },
      {
        id: 25,
        name: 'Зелений чай «Аньцзи Бай Ча»',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/e68b5e79-d571-4585-b606-fa9805eef56f.jpg',
        price: 799,
      },
      {
        id: 26,
        name: 'Зелений чай Хуа Лун Чжу (Жасмінова Перлина Дракона)',
        imageUrl:
          'https://images.ua.prom.st/1524548371_kitajskij-zelyonyj-chaj.jpg',
        price: 549,
      },
      {
        id: 27,
        name: 'Китайський чай Тай Пін Хоу Куй (повелитель мавп з села Тай Пін) - 50 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/96b7dc34-7d22-41f3-aa86-b59b54bc1dff.jpg',
        price: 549,
      },
      {
        id: 28,
        name: "Пов'язаний чай (квітка в чашці)",
        imageUrl:
          'https://images.ua.prom.st/1228507167_svyazannyj-chaj-tsvetok.jpg',
        price: 50,
      },
      {
        id: 29,
        name: 'Лун Цзин Сі Ху, Імператорський - 50 г',
        imageUrl:
          'https://static.tildacdn.com/tild3931-3030-4335-b563-393439373638/82BAA4D8-C3D3-4752-A.jpeg',
        price: 399,
      },
    ],
  },
  {
    title: 'Білий',
    items: [
      {
        id: 30,
        name: 'Білий чай Шоу Мей, блін, 350 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/958fb780-30ee-40aa-8094-5a00af0bea5e.jpg',
        price: 599,
      },
      {
        id: 31,
        name: 'Бай Хао Інь Чжень Витриманий білий чай 2020 рік 350 г',
        imageUrl:
          'https://sales-box-photos.s3-eu-central-1.amazonaws.com/ulun/original/services/82c73555-8911-4e56-a2df-5f1268a685ed.jpg',
        price: 1499,
      },
      {
        id: 32,
        name: 'Бай Му Дань (Білий піон) білий чай, 100 г',
        imageUrl: 'https://images.ua.prom.st/2500261192_baj-mu-dan.jpg',
        price: 249,
      },
      {
        id: 33,
        name: 'Білий чай Бай Хао Інь Чжень (срібні голки)',
        imageUrl: 'https://images.ua.prom.st/2288352592_belyj-chaj-baj.jpg',
        price: 648,
      },
      {
        id: 34,
        name: 'Бай Хао Інь Чжень - 1 шт.',
        imageUrl:
          'https://static.tildacdn.com/tild6662-6139-4332-b137-356231613062/4DE85E3B-F2BE-4663-9.jpeg',
        price: 50,
      },
      {
        id: 35,
        name: 'Я Бао 100 г',
        imageUrl: 'https://images.ua.prom.st/2343320139_ya-bao-100.jpg',
        price: 374,
      },
    ],
  },
  {
    title: "В'язаний",
    items: [
      {
        id: 36,
        name: 'Дянь Хун Мей Гуй Лун Чжу Шоу Гун',
        imageUrl:
          'https://thetea.ua/content/images/18/dyan-khun-mey-guy-lun-chzhu-48614799682483.jpg',
        price: 519,
      },
      {
        id: 37,
        name: 'Сю Цю Дянь Хун',
        imageUrl:
          'https://thetea.ua/content/images/2/dyan-khun-lun-chzhu-liliya-47281440387666.jpg',
        price: 232,
      },
      {
        id: 38,
        name: 'Птах мрії',
        imageUrl:
          'https://thetea.ua/content/images/50/ptitsa-mechty-93024608721072.jpg',
        price: 48,
      },
      {
        id: 39,
        name: 'Золота перлина дракона',
        imageUrl:
          'https://thetea.ua/content/images/3/zolotaya-zhemchuzhina-drakona-79379641419685.jpg',
        price: 48,
      },
      {
        id: 40,
        name: 'Піраміда',
        imageUrl:
          'https://thetea.ua/content/images/4/piramida-75493215276294.jpg',
        price: 48,
      },
    ],
  },
];

export default SHOP_DATA;
