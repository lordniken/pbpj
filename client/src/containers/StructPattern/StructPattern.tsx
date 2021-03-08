import React from 'react';
import { FlexBox } from 'components';

const StructPattern: React.FC = ({ children }) => {
  return (
    <FlexBox alignItems="center" component="header">
      Pattern loaded
      {children}
    </FlexBox>
  );
};

export default StructPattern;
