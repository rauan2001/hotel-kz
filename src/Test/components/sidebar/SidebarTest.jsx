import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import {
  Dashboard,
  Hotel,
  People,
  Settings,
  LocalParking,
  BusinessCenter, SingleBed
} from '@material-ui/icons';
import { Link, Route } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItem: {
    color: theme.palette.primary.contrastText,
  },
  listItemIcon: {
    color: theme.palette.primary.contrastText,
  },
  toolbar: {
    ...theme.mixins.toolbar, // добавляем стили по умолчанию для панели инструментов
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarTitle: {
    fontWeight: 700,
    fontSize: '1.2rem',
    marginLeft: theme.spacing(1),
  },
}));

function SidebarTest() {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar className={classes.toolbar}>
        {/* Тут должна быть иконка*/}
        <span className={classes.toolbarTitle}>Админская панель</span>
      </Toolbar>
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button component={Link} to="/test/admin" className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
          <ListItem button component={Link} to="/rooms"  className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <Hotel />
            </ListItemIcon>
            <ListItemText primary="Комнаты" />
          </ListItem>
          <ListItem button component={Link} to="/users" className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <People />
            </ListItemIcon>
            <ListItemText primary="Клиенты" />
          </ListItem>
          
          <ListItem button component={Link} to="/bookings" className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <SingleBed/>
            </ListItemIcon>
            <ListItemText primary="Бронирования" />
          </ListItem>

          <ListItem button component={Link} to="/parking" className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <LocalParking />
            </ListItemIcon>
            <ListItemText primary="Парковка" />
          </ListItem>
          <ListItem button component={Link} to="/wardrobe" className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <BusinessCenter />
            </ListItemIcon>
            <ListItemText primary="Гардероб" />
          </ListItem>

          <ListItem button className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default SidebarTest;
