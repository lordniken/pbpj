import React from 'react';
import AppContent from './Content';
import AppHeader from './Header';
import AppAside from './Aside';

const StructPattern: React.FC = ({ children }) => (
  <>
    <AppAside />
    <AppContent>
      {children}
    </AppContent>
  </>
);

export default StructPattern;
