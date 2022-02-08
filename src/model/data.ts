import { EventActivity } from './Event';

const data: EventActivity[] = [
  {
    id: 1,
    title: 'Yoga',
    description:
      'This group allows beginners to feel comfortable about experiencing Yoga and Meditation. Anyone and everyone should join! We would like to help anyone looking to learn more!',
    imgUrl:
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,FEB 1 @1:00 AM CET',
    location: 'Kellers Park',
    attending: false,
    creator: 'anonymous',
    comments: [
      { user: 'sara', message: 'how to book this event?' },
      { user: 'anonymous', message: 'Is this event free?' },
    ],
  },
  {
    id: 2,
    title: 'Hiking',
    description:
      'Enjoy crisp winter air, a peaceful lake, serene waterfalls and mountain top views. Bring your hiking shoes or sturdy sneakers and invite some friends to enjoy the outdoors. ',
    imgUrl:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Wed,MAR 5 @12:00 AM CET',
    location: 'Delsjön',
    creator: 'anonymous',
    attending: false,
    comments: [
      { user: 'user2', message: 'can I book this earlier?' },
      { user: 'guest', message: 'how much distance we cover in this hike?' },
    ],
  },
  {
    id: 3,
    title: 'Photography',
    description:
      'A 30-minute photo class covering low light photography and photography in museums. No tripods or flash photography on this one. But we can capture wonderful images regardless..',
    imgUrl:
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,FEB 12 @9:00 AM CET',
    location: 'Brunnsparken',
    creator: 'anonymous',
    attending: false,
    comments: [
      { user: 'user1', message: 'Is this event free?' },
      { user: 'ella', message: 'when will i get a confirmation?' },
    ],
  },
  {
    id: 4,
    title: 'Coding workshop!',
    description:
      'We host weekly workshops where developers are collaborating with each other in order to create projects and to help bring cool ideas into fruition.All you need is your laptop and an enthusiasm for programming..',
    imgUrl:
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Fri,APR 3 @5:00 PM CET',
    location: 'Gothenburg',
    creator: 'anonymous',
    attending: false,
    comments: [
      { user: 'Ben', message: 'can i bring my dog?' },
      { user: 'Ali', message: 'should i bring my laptop?' },
    ],
  },
  {
    id: 5,
    title: 'Gamers unite!',
    description:
      'Solving really cool, fun riddles and answering trivia type questions and other questions that are similar to your favorite TV game shows! All kind of games you can think of to all kind of places!',
    imgUrl:
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,DEC 1 @1:00 AM CET',
    location: 'Online',
    creator: 'anonymous',
    attending: false,
    comments: [
      { user: 'Emna', message: 'can you send me the zoom link?' },
      { user: 'lova', message: 'Is there any prize for the winner?' },
    ],
  },
  {
    id: 6,
    title: 'Book Club',
    description:
      'Bring the books of your favorite authors and lets chat discuss and have fun! Sharing our thoughts with each other and engaging with the other members is a great way to make new aquaintances!',
    imgUrl:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Sun,NOV 1 @2:00 PM CET',
    location: 'Gothenburg',
    creator: 'anonymous',
    attending: false,
    comments: [
      { user: 'sara', message: 'how to book this event?' },
      { user: 'anonymous', message: 'Is this event free?' },
    ],
  },
  {
    id: 7,
    title: 'Online Book Club',
    description:
      'Bring the books of your favorite authors and lets chat discuss and have fun! Sharing our thoughts with each other and engaging with the other members is a great way to make new aquaintances!',
    imgUrl:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Sun,NOV 1 @2:00 PM CET',
    location: 'Online',
    creator: 'anonymous',
    attending: false,
    comments: [
      { user: 'sara', message: 'how to book this event?' },
      { user: 'anonymous', message: 'Is this event free?' },
    ],
  },
];

export default data;
