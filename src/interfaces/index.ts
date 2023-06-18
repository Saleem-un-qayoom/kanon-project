export interface TaskType {
  id: string;
  priority: string;
  peoples: string[];
  comments: number;
  files: number;
  image?: string;
  heading: string;
  para: string;
}

export interface ColumnType {
  id: string;
  title: string;
  color: string;
  taskIds: string[];
}
