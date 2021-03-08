import React from 'react';
import { Box } from '@material-ui/core';

interface IProps {
  alignItems?: 'normal' | 'flex-start' | 'center' | 'baseline' | 'flex-end' | 'stretch';
  justifyContent?: 'normal' | 'flex-start' | 'flex-end' | 'center';
  display?: 'flex' | 'inline-flex';
  component?: React.ElementType;
}

const FlexBox: React.FC<IProps> = (
  { 
    alignItems = 'normal', 
    justifyContent = 'normal', 
    display = 'flex',
    component = 'div',
    children, 
    ...rest
  }
) => (
  <Box 
    display={display} 
    alignItems={alignItems} 
    justifyContent={justifyContent} 
    component={component}
    {...rest}
  >
    {children}
  </Box>
);

export default FlexBox;
