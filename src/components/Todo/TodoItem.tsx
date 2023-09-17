import { FC, useState, ChangeEvent, memo } from 'react';
import { IconButton, Paper, TextField } from '@mui/material';
import { RadioButtonUnchecked, TaskAlt, Delete, ModeEdit } from '@mui/icons-material';

import { useAppDispatch } from '../../redux/hooks';
import { changeTodo, deleteTodo } from '../../redux/todoThunk';

type Props = {
  id: number,
  checked: boolean,
  text: string
}

const TodoItem: FC<Props> = memo(({
  id,
  checked,
  text
}) => {
  const dispatch = useAppDispatch();
  
  const [ifReadOnly, setIfReadOnly] = useState(true);

  const [inputText, setInputText] = useState(text);

  const onEditHandler = () => {
    if (ifReadOnly) {
      setIfReadOnly(false);
      return
    }
      setIfReadOnly(true);
      const newData = {
        id,
        completed: checked,
        title: inputText,
          userId: 1
      };
      dispatch(changeTodo(newData));
  }

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (ifReadOnly) return;
    setInputText(e.target.value);
  };

  const onCompleteHandler = () => {
    if (!ifReadOnly) return;
    const ifChecked = !checked;
    const newData = {
      id,
      completed: ifChecked,
      title: text,
        userId: 1
    };
    dispatch(changeTodo(newData));
  }

  const onDeleteHandler = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <Paper
      elevation={2}
      sx={{
        width: '94%',
        p: '3%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {checked ? (
        <TaskAlt
          fontSize='large'
          onClick={onCompleteHandler}
          sx={{
            color: 'green',
              pr: 2,
              cursor: 'pointer'
          }}
        />
      ) : (
        <RadioButtonUnchecked
          fontSize='large'
          color={ifReadOnly ? 'error' : 'disabled'}
          onClick={onCompleteHandler}
          sx={{pr: 2, cursor: 'pointer'}}
        />
      )}
      <TextField
        variant={ifReadOnly ? 'standard' : 'outlined'}
        aria-label='todoItem'
        value={inputText}
        onChange={onChangeHandler}
        sx={{
          width: '75%',
            pointerEvents: ifReadOnly ? 'none' : 'unset',
          textDecoration: checked ? 'line-through' : 'none',
          color: checked ? '#00000042' : 'currentColor',
          '&:before': {
            borderBottom: 'none',
          },
          '&:after': {
            borderBottom: 'none',
          },
        }}
      />
      <IconButton
        aria-label='changeBtn'
        color={ifReadOnly ? 'secondary' : 'primary'}
        disabled={checked}
        onClick={onEditHandler}
        sx={{
          width: '60px',
        }}
      >
        <ModeEdit fontSize='large' />
      </IconButton>
      {ifReadOnly && (
        <IconButton
          aria-label='deleteBtn'
          color='default'
          sx={{
            width: '60px',
            '&:hover': {
              color: 'red',
            },
          }}
          onClick={onDeleteHandler}
        >
          <Delete fontSize='large' />
        </IconButton>
      )}
    </Paper>
  );
})

export { TodoItem };