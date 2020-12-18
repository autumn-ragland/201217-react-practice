import React from 'react';
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'

const Cards = (props) => {
    if (!props.data.positive) {
        // console.log("Failed to load");
        return 'Loading...'
    }
    // console.log(props.data.positive);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.positive} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.dateChecked).toDateString()}</Typography>
                        <Typography variant="body2">Number of Positive Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Hospitalized Increase</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.hospitalizedIncrease} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.dateChecked).toDateString()}</Typography>
                        <Typography variant="body2">Number of Infected Hospitalized</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.death} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.dateChecked).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;