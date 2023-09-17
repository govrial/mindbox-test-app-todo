import {ChangeEvent, useState, FC, memo, useEffect} from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';

import { useAppDispatch } from '../../redux/hooks';
import { addTodo } from '../../redux/todoThunk';

type Props = {
  lastDataId: number;
}

const Panel: FC<Props> = memo(({ lastDataId }) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');
  const [searchBtnDisabled, setSearchBtnDisabled] = useState<boolean>(true)

    useEffect(() => {
        setSearchBtnDisabled(!Boolean(value.length))
    }, [value]);

  const onAddHandler = () => {
    const newItem = {
      id: lastDataId,
      completed: false,
      title: value,
        userId: 1
    };
    dispatch(addTodo(newItem));
    setValue('');
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Box
      display='flex'
      flexDirection='row'
      sx={{
        width: '100%',
        minWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        mb: '20px',
      }}
    >
      <TextField
        value={value}
        placeholder="Add new todo"
        variant='outlined'
        onChange={onChangeHandler}
        sx={{
          width: '80%',
        }}
      />
      <Button
        disabled={searchBtnDisabled}
        variant='contained'
        aria-label='addButton'
        color='primary'
        size='medium'
        sx={{
          width: '20%',
        }}
        startIcon={<Add />}
        onClick={onAddHandler}
      >
        Add
      </Button>
    </Box>
  );
});

export { Panel };