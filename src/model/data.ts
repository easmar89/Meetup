import { EventActivity } from './Event';

const data: EventActivity[] = [
  {
    id: 1,
    title: 'Yoga',
    description:'This group allows beginners to feel comfortable about experiencing Yoga and Meditation.Anyone and everyone should join! We would like to help anyone looking to learn more about Meditation and Yoga',
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
      'Enjoy crisp winter air, a peaceful lake, serene waterfalls, mountain top views, and a perfect Saturday surrounded by nature. Bring your hiking shoes or sturdy sneakers and invite some friends to enjoy the outdoors. ',
    imgUrl:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Wed,MAR 5 @12:00 AM CET',
    location: 'Delsjön',
    
    comments: [
      { user: 'user2', message: 'can I book this earlier?' },
      { user: 'guest', message: 'how much distance we cover in this hike?' },
    ],
  },
  {
    id: 3,
    title: 'Photography',
    description:
      'a 30-minute photo class covering low light photography and photography in museums. No tripods or flash photography on this one. But we can capture wonderful images regardless..',
    imgUrl:
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,FEB 12 @9:00 AM CET',
    location: 'Brunnsparken',
   
    comments: [
      { user: 'user1', message: 'Is this event free?' },
      { user: 'ella', message: 'whwn will i get confirmation?' },
    ],
  },
  {
    id: 4,
    title: 'Coding workshop!',
    description:
      'Welcome fellow developers to Code Depot. We host weekly workshops where developers are free to collaborate with each other in order to create projects and to help bring cool ideas into fruition.All you need is your laptop and an enthusiasm for programming..',
    imgUrl:
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Fri,APR 3 @5:00 PM CET',
    location: 'Gothenburg',
    
    comments: [
      { user: 'Ben', message: 'how block the places for this?' },
      { user: 'Ali', message: 'how can I pay?' },
    ],
  },
  {
    id:5,
    title: 'Gamers unite!',
    description:
      'Solving really cool riddles and answering trivia type questions and other questions that are similar to your favorite TV game shows!.',
    imgUrl:
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,DEC 1 @1:00 AM CET',
    location: 'Online',
   
    comments: [
      { user: 'Emna', message: 'can you send me the zoom link?' },
      { user: 'lova', message: 'Is there any prize for the winner?' },
    ],
  },
  {
    id: 6,
    title: 'Book Club',
    description:
      'Bring the books of your favorite authors and lets chat discuss and have fun.',
    imgUrl:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Sun,NOV 1 @2:00 PM CET',
    location: 'New York',
    comments: [
      { user: 'user2', message: '123' },
      { user: 'ell', message: 'test' },
    ],
  },
  {
    id: 7,
    title: 'Online Book Club',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Sun,NOV 1 @2:00 PM CET',
    location: 'Online',
   
    comments: [
      { user: 'sara', message: 'how to book this event?' },
      { user: 'anonymous', message: 'Is this event free?' },
    ],
  },
];

export default data;
