import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import DataTable from '../../components/DataTable';
import { fetchBreweries } from '../../redux/breweries';
import { StoreState } from '../../redux/store';

const mapStateToProps = (state: StoreState) => ({
    auth: state.auth,
    breweries: state.breweries,
  });

export default connect(mapStateToProps)(function BreweriesPage(props: any) {
    const { auth, breweries } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const result = await fetchBreweries(auth.token);
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
            name: "country",
            label: "Country",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

    return(
        <DataTable title={"Breweries"} data={breweries.breweries} columns={columns}/>
    );
});