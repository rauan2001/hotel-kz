import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 270,
    height: 150,
    marginBottom: 150,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    fontSize: 60,
    color: '#6c757d',
  },
});

function WidgetCard({ title, value, icon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h3">{value}</Typography>
        </div>
        <div>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

export default WidgetCard;