import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import Countries from '../../constants/countries';

interface CountrySelectorProps {
    handleChange: (value: string) => void
}

export default function CountrySelector({handleChange}: CountrySelectorProps) {

    return(
        <FormControl fullWidth={true} size={'medium'} margin={'normal'}>
            <InputLabel htmlFor="country">Country:</InputLabel>
            <Select defaultValue={''} onChange={(event: any) => handleChange(event.target.value)} inputProps={{ name: 'country', id: 'country'}}>
                {Countries.map((value: string, key: number) => (
                    <MenuItem key={key} value={value && value}>{value}</MenuItem>
                ))}
            </Select>
            <FormHelperText>Country of brewery</FormHelperText>
        </FormControl>
    );
}