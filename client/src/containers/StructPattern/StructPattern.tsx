import React from 'react';
import { FlexBox } from 'components';

const StructPattern: React.FC = ({ children }) => {
  return (
    <FlexBox alignItems="center" justifyContent="center">
      Pattern loaded
      {children}
    </FlexBox>
  );
};

export default StructPattern;
