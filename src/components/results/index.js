import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import IAppBar from '../appBar';

class Results extends Component{
    render(){
        const { suggestions } = this.props;
        console.log(this.props);
        return(
            <div>
                <IAppBar/>
                <Page suggestions={suggestions}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions
    }
}

//Importante exportar el metodo connect con su wrapper al componente
export default connect(mapStateToProps)(Results);