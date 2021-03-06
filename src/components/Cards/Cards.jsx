import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';
// import CountUp from 'react-countup';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate} })=> {
    if(!confirmed) {
        return 'Loading...';
    }
    
    return (
      <div className={styles.container}>
          <Grid container spacing={3} justify="center">
              <Grid iterm component={Card}>
                  <CardContent>
                   <Typography color="textSecondary" gutterBottom>Infected</Typography>
                      <Typography variant="h5">
                          <CountUp 
                          start={0}
                          end={confirmed.value}
                          duration={2.5}
                          separator="," 
                          />
                        
                          
                          </Typography>
                      <Typography color="textSecondary">Real Date</Typography>
                      <Typography variant="body2">Number Of active cases of covid-19</Typography>
                  </CardContent>
                  
              </Grid>
              <Grid iterm component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                      <Typography variant="h5">Real Data</Typography>
                      <Typography color="textSecondary">Real Date</Typography>
                      <Typography variant="body2">Number Of recoverd cases of covid-19</Typography>
                  </CardContent>
                  
              </Grid>
              <Grid iterm component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                      <Typography variant="h5">Real Data</Typography>
                      <Typography color="textSecondary">Real Date</Typography>
                      <Typography variant="body2">Number Of Death cases of covid-19</Typography>
                  </CardContent>
                  
              </Grid>
          </Grid>
      </div>
    )
}
export default Cards;