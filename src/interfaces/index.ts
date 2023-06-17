interface TaskType {
  id: string;
  priority: string;
  peoples: string[];
  comments: number;
  files: number;
  heading: string;
  para: string;
}

export interface ColumnInterface {
  id: string;
  title: string;
  color: string;
  taskIds: string[];
}
