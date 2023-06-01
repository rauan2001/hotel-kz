import { Grid } from '@material-ui/core';
import { PeopleAlt, EventNote, AttachMoney } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import NavbarTest from '../components/navbar/NavbarTest';
import SidebarTest from '../components/sidebar/SidebarTest'
import "./HomeTest.scss";
import WidgetCard from '../components/Widget/WidgetTest';
import WeatherWidget from '../components/Weather/Weather';
import React, { useState, useEffect } from "react";
const useStyles = makeStyles({
  widgetContainer: {
    paddingLeft: '25px',
  },
  icon: {
    fontSize: 50,
    color: '#6c757d',
  },
});
function HomeTest() {
  const [countcl, setCount] = useState([]);
  useEffect(() => {
    const getcount = async () => {
      const res = await fetch("http://localhost:8800/api/client/");
      const getdata = await res.json();
      setCount(getdata);
    };
    getcount();
  },[]);
  const classes = useStyles();
  return (
    <div className='testhome1'>
      <div className='cont12'>
      <NavbarTest/>
      </div>
      <div className='cont22'>
      <SidebarTest/>
      <div className="flex flex-wrap justify-center md:justify-start justify-content-center">
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.widgetContainer}>
          <WeatherWidget />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.widgetContainer}>
          <WidgetCard title="Клиентов" value={countcl.clients} icon={<PeopleAlt className={classes.icon} />} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.widgetContainer}>
          <WidgetCard title="Бронирование" value={countcl.bookings} icon={<EventNote className={classes.icon} />} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.widgetContainer}>
          <WidgetCard title="Общий баланс" value="₸1" />
        </Grid>
      </Grid>
      </div>
    </div>
    </div>
  )
}

export default HomeTest