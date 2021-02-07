import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/store';

interface BrewerySelectorProps {
    handleChange: (value: string) => void
    breweries: any[],
}

const mapStateToProps = (state: StoreState) => ({
    breweries: state.breweries.breweries,
});

export default connect(mapStateToProps)(function BrewerySelector({ handleChange, breweries }: BrewerySelectorProps) {
    return(
        <FormControl fullWidth={true} size={'medium'} margin={'normal'} required>
            <InputLabel htmlFor="brewery">Brewery:</InputLabel>
            <Select defaultValue={''} onChange={(event: any) => handleChange(event.target.value)} inputProps={{ name: 'brewery', id: 'brewery'}}>
                {breweries.map((brewery: any) => (
                    <MenuItem key={brewery.id} value={brewery.id}>{brewery.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
});