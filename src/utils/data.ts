import {VIDEO} from './contants';

export const cards = [
  {
    id: '1',
    type: 'image',
    imageUri:
      'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?t=st=1750828846~exp=1750832446~hmac=02f1a44fb7a6096e7ec5831116a4709b14059fe3529bb3b0a63466aabe8a470a&w=826',
    description: 'A beautiful sunset.',
  },
  {
    id: '2',
    type: 'video',
    videoUri: VIDEO.light,
    description: 'Exploring the city streets.',
  },
  {
    id: '3',
    type: 'image',
    imageUri: 'https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbW91bnRhaW5zfGVufDB8fDB8fHww',
    description: 'Mountain view.',
  },
  {
    id: '4',
    type: 'video',
    videoUri: VIDEO.workout,
    description: 'Stronger every day – watch me shine! ✨',
  },
];
