import {FC, useEffect, useState, memo, useMemo} from 'react';
import { Box } from '@mui/material';

import { useAppMode } from '../../redux/hooks';
import { TodoItem } from './TodoItem';

type Props = {
  data: TodoItemType[];
};

const TodoList: FC<Props> = memo(({
  data
}) => {
  
  const mode: ModeType = useAppMode();

  const [modList, setModList] = useState(data);

  const modifiedList = useMemo(() => {
    return data.filter((todo) => {
      switch (mode as ModeType) {
        case 'All':
          return todo;
        case 'Active':
          return !todo.completed;
        case 'Completed':
          return todo.completed;
      }
    });
  }, [mode, data])

  useEffect(() => {
    setModList(modifiedList);
  }, [mode, data]);

  return (
    <Box display='flex' flexDirection='column' gap='20px'>
      {modList.map(({id, title, completed}) => {
        return (
          <TodoItem
            key={id}
            id={id}
            text={title}
            checked={completed}
          />
        );
      })}
    </Box>
  );
});

export { TodoList };