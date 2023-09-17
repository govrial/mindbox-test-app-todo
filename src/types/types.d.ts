type TodoItemType = {
  id: number,
  completed: boolean,
  title: string,
  userId?: number
}

type ModeType = 'All' | 'Active' | 'Completed';