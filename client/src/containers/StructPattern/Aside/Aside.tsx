import React from 'react';
import AsideHeader from './Header';
import AsideMenu from './Menu';
import { useStyles } from './styles';

const AppAside: React.FC = () => {
  const styles = useStyles();

  return (
    <aside className={styles.aside}>
      <AsideHeader />
      <AsideMenu />
    </aside>
  );
};

export default AppAside;
