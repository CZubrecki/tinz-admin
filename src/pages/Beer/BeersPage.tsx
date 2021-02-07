import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import DataTable from "../../components/DataTable";
import { fetchBeers } from "../../redux/reducers/beers";
import { StoreState } from "../../redux/store";

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth,
  beers: state.beers,
});

export default connect(mapStateToProps)(function BeersPage(props: any){
  const dispatch = useDispatch();
  const {auth, beers} = props;
  
  useEffect(() => {
    async function fetchData() {
      const result = await fetchBeers(auth.token);
      dispatch(result);
    }
    fetchData();
  }, [auth.token, dispatch]);

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
           customBodyRender: (value: any) => {
             return value+'%'
           }
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
    return <DataTable title={"Beers"} data={beers.beers} columns={columns}/>
});