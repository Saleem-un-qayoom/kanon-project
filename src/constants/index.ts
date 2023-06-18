import avatar1 from '../assets/avatars/avatar-1.png';
import avatar2 from '../assets/avatars/avatar-2.png';
import avatar3 from '../assets/avatars/avatar-3.png';

export const columnData = {
  'column-1': {
    id: 'column-1',
    title: 'Todo',
    color: '#5030E5',
    taskIds: ['task-1', 'task-2', 'task-3'],
  },
  'column-2': {
    id: 'column-2',
    title: 'In Progress',
    color: '#FFA500',
    taskIds: ['task-4', 'task-5'],
  },
  'column-3': {
    id: 'column-3',
    title: 'Done',
    color: '#8BC48A',
    taskIds: ['task-6', 'task-7'],
  },
};
export const taskData = {
  'task-1': {
    id: 'task-1',
    priority: 'low',
    peoples: [avatar1, avatar2, avatar3],
    comments: 12,
    files: 0,
    heading: 'Brainstorming',
    para: 'Brainstorming brings team members diverse experience into play. ',
  },
  'task-2': {
    id: 'task-2',
    priority: 'high',
    peoples: [avatar1, avatar2],
    comments: 10,
    files: 3,
    heading: 'Research',
    para: 'User research helps you to create an optimal product for users.',
  },
  'task-3': {
    id: 'task-3',
    priority: 'high',
    peoples: [avatar1, avatar2, avatar3],
    comments: 5,
    files: 6,
    heading: 'Wireframes',
    para: 'Low fidelity wireframes include the most basic content and visuals.',
  },
  'task-4': {
    id: 'task-4',
    priority: 'low',
    peoples: [avatar1, avatar2, avatar3],
    comments: 14,
    files: 15,
    image:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg',
    heading: 'Onboarding Illustrations ',
    para: '',
  },
  'task-5': {
    id: 'task-5',
    priority: 'low',
    peoples: [avatar1, avatar2],
    comments: 14,
    files: 15,
    image:
      'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000',
    heading: 'Wireframes',
    para: 'Low fidelity wireframes include the most basic content and visuals.',
  },
  'task-6': {
    id: 'task-6',
    priority: 'low',
    peoples: [avatar1, avatar2],
    comments: 12,
    files: 15,
    image:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg',
    heading: 'Mobile App Design ',
    para: '',
  },
  'task-7': {
    id: 'task-7',
    priority: 'low',
    peoples: [avatar1, avatar2, avatar3],
    comments: 12,
    files: 15,
    heading: 'Design System',
    para: 'It just needs to adapt the UI from what you did before ',
  },
};
export const columnOrder = ['column-1', 'column-2', 'column-3'];
