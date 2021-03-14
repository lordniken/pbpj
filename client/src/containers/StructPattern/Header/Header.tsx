import { FlexBox } from 'components';
import React from 'react';
import { useStyles } from './styles';

const AppHeader: React.FC = () => {
  const styles = useStyles();

  return (
    <FlexBox 
      className={styles.header}
      alignItems="center"
      component="header"
    >
      App Header
    </FlexBox>
  );};

export default AppHeader;
