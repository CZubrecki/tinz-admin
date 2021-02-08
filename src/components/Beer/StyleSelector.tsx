import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import Styles from '../../constants/styles';

interface StyleSelectorProps {
    handleChange: (value: string) => void
}

export default function StyleSelector({ handleChange }: StyleSelectorProps) {
    return (
        <FormControl fullWidth={true} size={'medium'} margin={'normal'}>
            <InputLabel htmlFor="style">Style:</InputLabel>
            <Select defaultValue={''} onChange={(event: any) => handleChange(event.target.value)} inputProps={{ name: 'style', id: 'style' }}>
                {Styles.map((value: string, key: number) => (
                    <MenuItem key={key} value={value && value}>{value}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}