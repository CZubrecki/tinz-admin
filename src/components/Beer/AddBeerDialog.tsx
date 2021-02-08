import { DialogActions, DialogContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { createStyles, Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { CreateBeer } from '../../models/beer.model';
import { createBeer } from '../../redux/reducers/beers';
import { StoreState } from '../../redux/store';
import BrewerySelector from '../Brewery/BrewerySelector';
import StyleSelector from './StyleSelector';

interface AddBeerDialogProps {
    auth: any,
    handleClose: () => void;
}

const mapStateToProps = (state: StoreState) => ({
    auth: state.auth,
});


export default connect(mapStateToProps)(function AddBeerDialog({ auth, handleClose }: AddBeerDialogProps) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [breweryId, setBreweryId] = useState<string>('');
    const [style, setStyle] = useState<string>('');
    const [abv, setABV] = useState<string>('');
    const [ibu, setIBU] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>(undefined);

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
    }

    const handleAdd = async () => {
        const beer: CreateBeer = {
            breweryId,
            name,
            style,
            abv,
            ibu,
            description,
            image: {},
        };
        const response = await createBeer(auth.token, beer);
        dispatch(response);
        handleClose();
    }

    return (
        <>
            <DialogTitle>Add Beer</DialogTitle>
            <DialogContent>
                <form>
                    <FormControl fullWidth={true} required size={'medium'} margin={'normal'}>
                        <InputLabel>Name:</InputLabel>
                        <Input onChange={(event) => setName(event.target.value)} />
                        <FormHelperText>Name of beer</FormHelperText>
                    </FormControl>

                    <BrewerySelector handleChange={(brewery: string) => setBreweryId(brewery)} />

                    <StyleSelector handleChange={(style: string) => setStyle(style)} />

                    {/* <FormControl fullWidth={true} size={'medium'} margin={'normal'}>
                        <InputLabel>Substyle:</InputLabel>
                        <Input onChange={(event) => setName(event.target.value)} />
                    </FormControl> */}

                    <FormControl fullWidth={true} required size={'medium'} margin={'normal'}>
                        <InputLabel>ABV:</InputLabel>
                        <Input onChange={(event) => setABV(event.target.value)} type={'number'} />
                        <FormHelperText>Alcohol by volumne</FormHelperText>
                    </FormControl>

                    <FormControl fullWidth={true} required size={'medium'} margin={'normal'}>
                        <InputLabel>IBU:</InputLabel>
                        <Input onChange={(event) => setIBU(event.target.value)} type={'number'} />
                        <FormHelperText>International bitterness units</FormHelperText>
                    </FormControl>

                    <FormControl fullWidth={true} size={'medium'} margin={'normal'}>
                        <InputLabel>Description:</InputLabel>
                        <Input onChange={(event) => setDescription(event.target.value)} type={'number'} />
                    </FormControl>

                    <FormControl fullWidth={true} size={'medium'} margin={'normal'}>
                        <input className={classes.input} accept="image/*" id="contained-button-file" multiple type="file" onChange={handleFileSelected} />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">Upload Image</Button>
                        </label>
                    </FormControl>
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            display: 'none',
        },
    }),
);