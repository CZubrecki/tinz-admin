import { Button, Dialog, makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import AddBreweryDialog from '../../components/Brewery/AddBreweryDialog';
import DataTable from '../../components/DataTable';
import { fetchBreweries } from '../../redux/reducers/breweries';
import { StoreState } from '../../redux/store';

const mapStateToProps = (state: StoreState) => ({
    auth: state.auth,
    breweries: state.breweries,
});

export default connect(mapStateToProps)(function BreweriesPage(props: any) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { auth, breweries } = props;
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    const fetchData = useCallback(
        async () => {
            const result = await fetchBreweries(auth.token);
            dispatch(result);
        },
        [auth.token, dispatch],
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleClose = async () => {
        fetchData();
        setDialogVisible(false);
    }


    const columns = [
        {
            name: 'id',
            label: '',
            options: {
                display: false,
                filter: false,
                sort: false,
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
                sortDescFirst: true,
            }
        },
        {
            name: "country",
            label: "Country",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

    return (
        <>
            <Toolbar>
                <div className={classes.toolbar} />
                <Button color="primary" variant="outlined" onClick={() => setDialogVisible(true)}>Add</Button>
            </Toolbar>
            <Dialog open={dialogVisible} onClose={handleClose} maxWidth={'sm'} fullWidth={true}>
                <AddBreweryDialog handleClose={handleClose} />
            </Dialog>
            <DataTable title={'Breweries'} redirectPath={'brewery'} data={breweries.breweries} columns={columns} />
        </>
    );
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            flexGrow: 1,
        },
    }),
);