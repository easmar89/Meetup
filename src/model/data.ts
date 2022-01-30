import { EventActivity } from './Event';

const data: EventActivity[] = [
  {
    id: 1,
    title: 'Yoga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,FEB 1 @1:00 AM CET',
    location: 'Kellers Park',
    comments: [
      { user: 'sara', message: 'how to book this event?' },
      { user: 'anonymous', message: 'Is this event free?' },
    ],
  },
  {
    id: 2,
    title: 'Hiking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Wed,MAR 5 @12:00 AM CET',
    location: 'Delsjön',
    comments: [
      { user: 'user2', message: '123' },
      { user: 'ell', message: 'test' },
    ],
  },
  {
    id: 3,
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,FEB 12 @9:00 AM CET',
    location: 'Brunnsparken',
    comments: [
      { user: 'user2', message: '123' },
      { user: 'ell', message: 'test' },
    ],
  },
  {
    id: 4,
    title: 'Connect!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Fri,APR 3 @5:00 PM CET',
    location: 'Gothenburg',
    comments: [
      { user: 'user2', message: '123' },
      { user: 'ell', message: 'test' },
    ],
  },
  {
    id: 5,
    title: 'Gamers unite!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,DEC 1 @1:00 AM CET',
    location: 'Online',
    comments: [
      { user: 'user2', message: '123' },
      { user: 'ell', message: 'test' },
    ],
  },
  {
    id: 6,
    title: 'Book Club',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Sun,NOV 1 @2:00 PM CET',
    location: 'Online',
    comments: [
      { user: 'user2', message: '123' },
      { user: 'ell', message: 'test' },
    ],
  },
];

export default data;
