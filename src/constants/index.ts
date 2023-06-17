import avatar1 from '../assets/avatars/avatar-1.png';
import avatar2 from '../assets/avatars/avatar-2.png';
import avatar3 from '../assets/avatars/avatar-3.png';
import avatar4 from '../assets/avatars/avatar-4.png';

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
    taskIds: [],
  },
  'column-3': {
    id: 'column-3',
    title: 'Done',
    color: '#8BC48A',
    taskIds: [],
  },
};
export const taskData = {
  'task-1': {
    id: 'task-1',
    priority: 'low',
    peoples: [avatar1, avatar2, avatar3, avatar4],
    comments: 0,
    files: 0,
    heading: 'What is Lorem Ipsum?',
    para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  'task-2': {
    id: 'task-2',
    priority: 'high',
    peoples: [avatar1, avatar2, avatar3, avatar4],
    comments: 30,
    files: 10,
    heading: 'Why do we use it?',
    para: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  'task-3': {
    id: 'task-3',
    priority: 'low',
    peoples: [avatar1, avatar2, avatar3, avatar4],
    comments: 0,
    files: 0,
    heading: 'Where does it come from?',
    para: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  },
};
export const columnOrder = ['column-1', 'column-2', 'column-3'];
