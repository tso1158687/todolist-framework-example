export type Todo = {
  title: string;
  content: string;
  id: number;
  dueDate: Date | null;
  createDate: Date;
  completed: boolean;
};

export type newTodo = Omit<Todo, 'id' | 'createDate' | 'completed'>;
