import MUIDataTable from "mui-datatables";
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchBeers } from "../redux/beers";
import { StoreState } from "../redux/store";

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth,
  beer: state.beer,
});

export default connect(mapStateToProps)(function HomePage(props: any){
  const dispatch = useDispatch();
  const {auth, beer} = props;

  const loadBeer = async () => {
    const result = await fetchBeers(auth.token);
    dispatch(result);
  }
  
  useEffect(() => {
      loadBeer();
  }, []);

    const columns = [
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
        <MUIDataTable
          title={"Beers"}
          data={beer.beers}
          columns={columns} />
    );
});