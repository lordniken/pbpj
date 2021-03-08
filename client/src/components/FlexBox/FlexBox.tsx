import React from 'react';
import { Box } from '@material-ui/core';

interface IProps {
  alignItems?: 'normal' | 'flex-start' | 'center' | 'baseline' | 'flex-end' | 'stretch';
  justifyContent?: 'normal' | 'flex-start' | 'flex-end' | 'center';
  display?: 'flex' | 'inline-flex';
}

const FlexBox: React.FC<IProps> = (
  { 
    alignItems = 'normal', 
    justifyContent = 'normal', 
    display = 'flex',
    children, 
    ...rest
  }
) => (
  <Box 
    display={display} 
    alignItems={alignItems} 
    justifyContent={justifyContent} 
    {...rest}
  >
    {children}
  </Box>
);

export default FlexBox;
