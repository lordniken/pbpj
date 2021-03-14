import React from 'react';
import { Typography } from '@material-ui/core';
import { FlexBox } from 'components';
import { useStyles } from '../styles';

const AsideHeader: React.FC = () => {
  const styles = useStyles();

  return (
    <FlexBox 
      className={styles.header} 
      justifyContent="center" 
      alignItems="center"
    >
      <Typography variant="h5">Queries</Typography>
    </FlexBox>
  );
};

export default AsideHeader;
