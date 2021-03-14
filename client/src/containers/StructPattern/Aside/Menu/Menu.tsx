import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from '../styles';

const menu = [
  {
    name: 'REST',
    path: '/',
    icon: <MailIcon />
  },
  {
    name: 'WebSockets',
    path: '/ws',
    icon: <MailIcon />
  },
  {
    name: 'GraphQL',
    path: '/gql',
    icon: <MailIcon />
  }
];

const AppMenu: React.FC = () => {
  const styles = useStyles();

  return (
    <Drawer variant="permanent" className={styles.menu} open>
      <List>
        {menu.map(({ name, path, icon }) => (
          <Link 
            to={path} 
            key={path} 
            component={RouterLink}
            variant="inherit"
            className={styles.menuLink}
            color='primary'
          >
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default AppMenu;
