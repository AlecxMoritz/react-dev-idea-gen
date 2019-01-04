import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Generator from './Generator/Generator';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const CenteredGrid = (props) => {
    const { classes } = props;

    return (
        <Grid container spacing={24}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
                <Paper className={classes.paper}>
                    <Generator />
                </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
    )
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CenteredGrid);