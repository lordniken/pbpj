import React from 'react';
import { FlexBox } from 'components';
import AppContent from './Content';
import AppHeader from './Header';
import AppAside from './Aside';
import { useStyles } from './styles';

const StructPattern: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <FlexBox>
      <AppAside />
      <FlexBox 
        flex="1" 
        flexDirection="column" 
        className={styles.content}
      >
        <AppHeader />
        <AppContent>
          {children}
        </AppContent>
      </FlexBox>
    </FlexBox>
  );
};

export default StructPattern;
