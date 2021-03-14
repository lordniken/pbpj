import React from 'react';
import { useStyles } from './styles';

const AppContent: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <main className={styles.content}>
      {children}
    </main>
  );
};

export default AppContent;
