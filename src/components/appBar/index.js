import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Page from './page';

export default class IAppBar extends Component{
    render(){
        return(
            <div>
                <CssBaseLine/>
                <Page />
            </div>
        )
    }
}