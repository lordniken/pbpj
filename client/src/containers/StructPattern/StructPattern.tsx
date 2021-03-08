import React from 'react';
import AppHeader from './Header';
import AppMenu from './Menu';

const StructPattern: React.FC = ({ children }) => (
  <>
    <AppHeader />
    <AppMenu />
    Pattern loaded
    {children}
  </>
);

export default StructPattern;
