export interface TaskType {
  id: string;
  priority: 'low' | 'high' | 'completed';
  peoples: string[];
  comments: number;
  files: number;
  image?: string;
  heading: string;
  para: string;
}

export interface ColumnType {
  id: string;
  title: 'low' | 'high' | 'completed';
  color: string;
  taskIds: string[];
}
