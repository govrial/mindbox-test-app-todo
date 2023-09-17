import { FC } from 'react';

import { Button as MUIBtn } from "@mui/material";

type Props = {
  children: ModeType;
  matchCurrentMode: boolean;
  onClick: (mode: ModeType) => void;
};

const Button: FC<Props> = ({ children, matchCurrentMode, onClick }) => {
  const onClickHandler = () => {
    onClick(children);
  };

  return (
    <MUIBtn
      data-testId={children}
      variant={matchCurrentMode ? 'contained' : 'outlined'}
      sx={{
        color: '#0000008a',
      }}
      onClick={onClickHandler}
    >
      {children}
    </MUIBtn>
  );
};

export { Button };