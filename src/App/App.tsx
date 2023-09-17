import { useEffect, memo, useCallback, useMemo } from 'react';

import { useAppDispatch, useAppList } from '../redux/hooks';
import {getTodos, deleteTodo, deleteCompletedTodo} from '../redux/todoThunk';
import { Footer, Header, Panel, TodoList } from '../components';
import './App.css';

const App = memo(() => {
  const dispatch = useAppDispatch();

  const data: TodoItemType[] = useAppList();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const newItemId = useMemo(() => {
    return data.length > 0 ? data[data.length - 1].id + 1 : 1;
  }, [data]);

  const onDeleteCompletedHandler = useCallback(() => {
    const completedList: TodoItemType[] = data.filter((todo) => !todo.completed);
    if (completedList.length < 1) return;
      console.log(completedList)
    dispatch(deleteCompletedTodo(completedList));
  }, [data]);

  return (
    <div className='App'>
      <Header />
      <Panel lastDataId={newItemId} />
      <TodoList data={data} />
      <Footer onDeleteCompleted={onDeleteCompletedHandler} />
    </div>
  );
});

export default App;
































