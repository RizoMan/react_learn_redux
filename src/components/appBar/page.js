import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AutoComplete from '../autocomplete';

export default function Page(props) {

    // const {
    //     text,
    //     suggestions,
    //     onChangeText,
    //     onChangeSelection
    // } = props;

    return (
        <AppBar>
            <Toolbar className="appbar">
                <Typography variant="h6" color="inherit">
                    Program X
                </Typography>
                <AccountCircle/>

                <AutoComplete />
            </Toolbar>
        </AppBar>
    );
}