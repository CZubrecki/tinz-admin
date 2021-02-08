import { Button, CircularProgress, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Credentials } from '../models/auth.model';
import { signIn } from '../redux/reducers/auth';

export default function LoginPage() {
    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(false);
    let history = useHistory();
    let location = useLocation();

    const dispatch = useDispatch();
    const classes = useStyles();
    let value: any = location.state || { from: { pathname: "/" } };

    const login = async () => {
        const credentials: Credentials = {
            email,
            password,
        };
        try {
            setLoading(true);
            const result = await signIn(credentials);
            dispatch(result);
            if (value && value.from) {
                history.replace(value.from);
            }
        } catch (err) {
            setLoading(false);
        }
    }

    if (loading) {
        return <CircularProgress />
    }

    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <div className={classes.input}>
                    <TextField id="outlined-email-input" label="Email" type="email" autoComplete="current-email" variant="outlined" onChange={event => setEmail(event.target.value)} />
                </div>
                <div className={classes.input}>
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={event => setPassword(event.target.value)} />
                </div>
                <div className={classes.button}>
                    <Button onClick={login} variant="contained" color="primary">Log In</Button>
                </div>
            </form>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        marginTop: '25%',
    },
    input: {
        margin: 10,
    },
    button: {
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
    }
});