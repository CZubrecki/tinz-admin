import { FormControl, FormHelperText, Input, InputLabel, makeStyles } from '@material-ui/core';
import React from 'react';

export default function LoginScreen(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        backgroundColor: '#000000'
    },
  });