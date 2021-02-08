import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { CreateBrewery } from '../../models/brewery.model';
import { createBrewery } from '../../redux/reducers/breweries';
import { StoreState } from '../../redux/store';
import CountrySelector from './CountrySelector';


interface AddBreweryDialogProps {
    auth: any,
    handleClose: () => void;
}

const mapStateToProps = (state: StoreState) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(function AddBreweryDialog({ auth, handleClose }: AddBreweryDialogProps) {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    const handleAdd = async () => {
        if (name && country) {
            const brewery: CreateBrewery = {
                name,
                country
            };
            const response = await createBrewery(auth.token, brewery);
            dispatch(response);
            handleClose();
        }
    }

    return (
        <>
            <DialogTitle>Add Brewery</DialogTitle>
            <DialogContent>
                <form>
                    <FormControl fullWidth={true} size={'medium'} margin={'normal'}>
                        <InputLabel>Name:</InputLabel>
                        <Input onChange={(event) => setName(event.target.value)} />
                        <FormHelperText>Name of the brewery</FormHelperText>
                    </FormControl>
                    <CountrySelector handleChange={(country: string) => setCountry(country)} />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
                <Button onClick={handleAdd} variant="contained" color="primary">
                    Add
                </Button>
            </DialogActions>
        </>
    );
});