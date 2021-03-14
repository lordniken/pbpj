import React from 'react';
import { useStyles } from './styles';

const AppContent: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <main>
      <div className={styles.spacer} />
      {children}
    </main>
  );
};

export default AppContent;
