import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../redux/auth';

export default function Header() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const logout = () => {
        const response = signOut({});
        dispatch(response);
    }
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={() => logout()} >Sign Out</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);