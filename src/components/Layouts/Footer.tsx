import { FC, memo } from 'react';
import { Box } from "@mui/system";
import { Button as MUIBtn, Typography } from '@mui/material';

import { useAppMode, useAppDispatch, useAppListLength } from '../../redux/hooks';
import { setMode } from '../../redux/modeSlice';
import {Button} from "../ui/Button";

type Props = {
  onDeleteCompleted: () => void;
};

const Footer: FC<Props> = memo(({
  onDeleteCompleted
}) => {
  const dispatch = useAppDispatch();

  const currentMode = useAppMode();

  const listLength = useAppListLength();

  const onModeChange = (mode: ModeType) => {
    dispatch(setMode(mode));
  }

  const text = listLength === 1 ? 'item' : 'items';
  const modes: ModeType[] = ['All', 'Active', 'Completed'];
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-around'
      alignItems='center'
      sx={{pt: 4}}
    >
      <Typography variant='body1'>
        {listLength} {text} left
      </Typography>
      <Box display='flex' gap='20px'>
        {modes.map((item, index) => {
          return (
            <Button
              key={String(index)}
              matchCurrentMode={currentMode === item}
              onClick={onModeChange}
            >
              {item}
            </Button>
          );
        })}
      </Box>
      <MUIBtn
        variant='contained'
        color='error'
        onClick={onDeleteCompleted}
      >
          Clear completed
      </MUIBtn>
    </Box>
  );
});

export { Footer };