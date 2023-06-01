import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Typography,
} from '@material-ui/core';
import {
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  AccessTime as AccessTimeIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${240}px)`, // 240px - ширина Sidebar
    marginLeft: 240,
    marginBottom: theme.spacing(2),
    backgroundColor: '#fff',
    color: '#333',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  notifications: {
    marginRight: theme.spacing(2),
  },
  settings: {
    marginRight: theme.spacing(2),
  },
  date: {
    marginRight: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    borderLeft: `1px solid ${theme.palette.text.primary}`,
  },
  avatar: {
    marginRight: theme.spacing(5),
  },
  time: {
    marginLeft: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderLeft: `1px solid ${theme.palette.text.primary}`,
  },
}));

function NavbarTest() {
  const classes = useStyles();

  const now = new Date();
  const formattedDate = now.toLocaleDateString('ru-RU', { weekday: 'long', month: 'long', day: 'numeric' });
  const formattedTime = now.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Название отеля
        </Typography>
        <IconButton aria-label="notifications" className={classes.notifications}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="settings" className={classes.settings}>
          <SettingsIcon />
        </IconButton>
        <Avatar alt="User Profile" src="/avatar.png" className={classes.avatar}/>
        <Typography variant="subtitle1" className={classes.date}>
          {formattedDate}
        </Typography>
        <IconButton aria-label="time" className={classes.time}>
          <AccessTimeIcon />
        </IconButton>
        <Typography variant="subtitle1">
          {formattedTime}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarTest;

