import { Cloth } from './cloth';
export const CLOTHES: Cloth[] = [

  {
    id: '0',
    name: 'ClothName-1',
    image: '/assets/images/maik.jpg',
    featured: true,
    label: 'Острая',
    price: '17.50',
    description:
      'description-1',
    comments: [
      {
        rating: 5,
        comment: 'comment-1',
        author: 'Ольга',
        date: '2021-10-16',
      },
      {
        rating: 4,
        comment: 'comment-2',
        author: 'Павел',
        date: '2020-09-05',
      },
      {
        rating: 3,
        comment: 'comment-3',
        author: 'Леша',
        date: '2021-12-14',
      },
    ],
  },
  
  {
    id: '1',
    name: 'ClothName-2',
    image: '/assets/images/maik.jpg',
    featured: true,
    label: 'Новая',
    price: '20.10',
    description:
      'description-2',
    comments: [
      {
        rating: 2,
        comment: 'comment-1',
        author: 'Сергей',
        date: '2021-03-15',
      },
    ],
  },
  {
    id: '2',
    name: 'ClothName-3',
    image: '/assets/images/maik.jpg',
    featured: true,
    label: '',
    price: '20.10',
    description:
      'description-3',
    comments: [
      {
        rating: 5,
        comment: 'comment-1',
        author: 'Мария',
        date: '2022-01-05',
      },
      {
        rating: 5,
        comment: 'comment-2',
        author: 'Геннадий',
        date: '2021-14-02',
      },
    ],
  },
  {
    id: '3',
    name: 'ClothName-4',
    image: '/assets/images/maik.jpg',
    featured: true,
    label: '',
    price: '18.60',
    description:
      'description-4',
    comments: [
      {
        rating: 4,
        comment: 'comment-1',
        author: 'Дарья',
        date: '2022-02-02',
      },
    ],
  },
];
