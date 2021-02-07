import { Button, Dialog, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import AddBeerDialog from '../../components/Beer/AddBeerDialog';
import DataTable from "../../components/DataTable";
import { fetchBeersAndBreweries } from "../../redux/reducers/beers";
import { StoreState } from "../../redux/store";

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth,
  beers: state.beers,
});

export default connect(mapStateToProps)(function BeersPage(props: any){
  const classes = useStyles();
  const dispatch = useDispatch();
  const {auth, beers} = props;
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const fetchData = useCallback(
    async () => {
      const result = await fetchBeersAndBreweries(auth.token);
      dispatch(result);
    },
    [auth.token, dispatch],
  );
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClose = () => {
    fetchData();
    setDialogVisible(false); 
  }

    const columns = [
        {
          name: 'id',
          label: '',
          options: {
              display: false,
          }
        },
        {
          name: "brewery",
          label: "Brewery",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (brewery: any) => brewery.name
          }
         },
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
          name: "style",
          label: "Style",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
          name: "ibu",
          label: "IBU",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
          name: "abv",
          label: "ABV",
          options: {
           filter: true,
           sort: false,
           customBodyRender: (abv: any) => abv+'%'
          }
         },
        {
         name: "rating",
         label: "Rating",
         options: {
          filter: true,
          sort: false,
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
                <AddBeerDialog handleClose={handleClose} />
        </Dialog>
        <DataTable title={'Beers'} redirectPath={'beer'} data={beers.beers} columns={columns}/>
      </>
    )
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      flexGrow: 1,
    },
  }),
);