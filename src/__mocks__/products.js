import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2022',
    description: 'Product Description goes here',
    media: '/static/images/products/product_1.png',
    title: 'Tilapia',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2022',
    description: 'Product Description goes here',
    media: '/static/images/products/product_2.png',
    title: 'Salmon',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2022',
    description: 'Product Description goes here',
    media: '/static/images/products/product_3.png',
    title: 'Red Fish',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2022',
    description: 'Product Description goes here',
    media: '/static/images/products/product_4.png',
    title: 'Crawfish',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2022',
    description: 'Product Description goes here',
    media: '/static/images/products/product_5.png',
    title: 'Tuna Fish',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2022',
    description: 'Product Description goes here',
    media: '/static/images/products/product_6.png',
    title: 'Cat Fish',
    totalDownloads: '835'
  }
];
