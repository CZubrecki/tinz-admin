import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { signOut } from '../redux/auth';

export default function Header() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = (path: string) => history.push(`/${path}`);

    const logout = () => {
        const response = signOut({});
        dispatch(response);
    }
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.navigation}>
                      <Button color="inherit" onClick={() => handleClick('breweries')}>Breweries</Button>
                      <Button color="inherit" onClick={() => handleClick('beers')}>Beers</Button>
                    </div>
                    <Button color="inherit" onClick={() => logout()}>Sign Out</Button>
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
    navigation: {
      flexGrow: 1,
    },
  }),
);