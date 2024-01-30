import { AppImages } from '../assets-project';
const localImageSource = AppImages.empyState;

const posts = [
  {
    coverImage: localImageSource,
    title: 'Amazing Desert',
    status: 'Published',
    timestamp: '31 August 2016',
    description: 'Reference this table when designing your app’s interface, and make sure',
    likes: 345,
  },
  {
    coverImage: localImageSource,
    title: 'New Post',
    status: 'Draft',
    timestamp: '07 March 2017',
    description: 'This is the beginning of a new post',
    likes: 0,
  },
];

export default posts;