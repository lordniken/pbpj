import React from 'react';
import Header from './Header';

const StructPattern: React.FC = ({ children }) => (
  <>
    <Header />
    Pattern loaded
    {children}
  </>
);

export default StructPattern;
